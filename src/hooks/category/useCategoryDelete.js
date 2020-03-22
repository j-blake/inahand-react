import { useDispatch } from 'react-redux';
import {
  requestDeleteCategory,
  deleteCategorySuccess,
  requestFailed,
} from '../../data/actions/categoryActions';
import deleteCategory from '../../data/services/category/deleteCategory';

const handleFailedResponse = (dispatch) => dispatch(requestFailed());

export default function useCategoryDelete() {
  const dispatch = useDispatch();
  return async (categoryId) => {
    dispatch(requestDeleteCategory(categoryId));
    try {
      const response = await deleteCategory(categoryId);
      if (response.ok) {
        return dispatch(deleteCategorySuccess(categoryId));
      }
      return (handleFailedResponse(dispatch));
    } catch (error) {
      return dispatch(requestFailed());
    }
  };
}
