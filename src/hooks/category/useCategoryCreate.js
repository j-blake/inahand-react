import { useDispatch } from 'react-redux';
import { normalize, schema } from 'normalizr';
import { requestAddNewCategory, receiveAddNewCategory, requestFailed } from '../../data/actions/categoryActions';
import addCategory from '../../data/services/category/addCategory';

const normalizeDatum = (originalData) => {
  const category = new schema.Entity('category', {}, { idAttribute: 'id' });
  const categorySchema = { category };
  const normalizedData = normalize(originalData, categorySchema);
  return normalizedData;
};

export default function useCategoryCreate() {
  const dispatch = useDispatch();
  return async (data) => {
    dispatch(requestAddNewCategory(data));
    try {
      const response = await addCategory(data);
      const json = normalizeDatum(response.data);
      return dispatch(receiveAddNewCategory(json.entities));
    } catch (error) {
      return dispatch(requestFailed());
    }
  };
}
