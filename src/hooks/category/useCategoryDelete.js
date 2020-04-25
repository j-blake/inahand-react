import { useDispatch } from 'react-redux';
import {
  requestDeleteCategory,
  deleteCategorySuccess,
  requestFailed,
} from '../../data/actions/categoryActions';
import deleteCategory from '../../data/services/category/deleteCategory';

export default function useCategoryDelete() {
  const dispatch = useDispatch();
  return async (categoryId) => {
    dispatch(requestDeleteCategory(categoryId));
    try {
      await deleteCategory(categoryId);
      return dispatch(deleteCategorySuccess(categoryId));
    } catch (e) {
      return dispatch(requestFailed());
    }
  };
}
