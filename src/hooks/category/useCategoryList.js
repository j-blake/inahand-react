import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { normalize, schema } from 'normalizr';
import { requestCategories, receiveCategories, requestFailed } from '../../data/actions/categoryActions';
import fetchCategoriesData from '../../data/services/category/fetchCategories';

const normalizeData = (originalData) => {
  const categorySchema = new schema.Entity('categories');
  const categoryListSchema = { categories: [categorySchema] };
  const normalizedData = normalize(originalData, categoryListSchema);
  return normalizedData;
};

export default function useCategory() {
  const dispatch = useDispatch();
  const isInvalidated = useSelector((state) => state.category.isInvalidated);
  useEffect(() => {
    async function fetchData() {
      dispatch(requestCategories());
      try {
        const response = await fetchCategoriesData();
        const data = normalizeData(response.data);
        return dispatch(receiveCategories(data.entities || {}));
      } catch (e) {
        return dispatch(requestFailed());
      }
    }
    if (isInvalidated) {
      fetchData();
    }
  }, [dispatch, isInvalidated]);
  const parentId = useSelector((state) => state.category.activeCategory) || undefined;
  return useSelector((state) => Object.values(state.category.categories || {})
    .filter((category) => category.parent === parentId));
}
