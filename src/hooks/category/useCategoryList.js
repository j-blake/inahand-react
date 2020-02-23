import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { normalize, schema } from 'normalizr';
import { requestCategories, receiveCategories, requestFailed } from '../../data/actions/categoryActions';
import fetchCategoriesData from '../../data/services/category/fetchCategories';

const handleFailedResponse = (dispatch) => dispatch(requestFailed());

const normalizeData = (originalData) => {
  const parent = new schema.Entity('parents');
  const category = new schema.Entity('categories', {
    parent,
  }, {
    idAttribute: '_id',
  });
  const categorySchema = { categories: [category] };
  const normalizedData = normalize(originalData, categorySchema);
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
        if (response.ok) {
          const json = await response.json();
          const data = normalizeData(json);
          return dispatch(receiveCategories(data.entities));
        }
        return handleFailedResponse(dispatch);
      } catch (error) {
        return dispatch(requestFailed());
      }
    }
    if (isInvalidated) {
      fetchData();
    }
  }, [dispatch, isInvalidated]);
  const parentId = useSelector((state) => state.category.activeCategory) || undefined;
  return useSelector((state) => Object.values(state.category.categories)
    .filter((category) => category.parent === parentId));
}
