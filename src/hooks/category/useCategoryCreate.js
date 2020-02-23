import { useDispatch } from 'react-redux';
import { normalize, schema } from 'normalizr';
import { requestAddNewCategory, receiveAddNewCategory, requestFailed } from '../../data/actions/categoryActions';
import addCategory from '../../data/services/category/addCategory';

const handleFailedResponse = (dispatch) => dispatch(requestFailed());

const normalizeDatum = (originalData) => {
  const category = new schema.Entity('category', {}, {
    idAttribute: '_id',
  });
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
      if (response.ok) {
        const json = normalizeDatum(await response.json());
        return dispatch(receiveAddNewCategory(json.entities));
      }
      return (handleFailedResponse(dispatch));
    } catch (error) {
      return dispatch(requestFailed());
    }
  };
}
