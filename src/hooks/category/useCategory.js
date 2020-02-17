import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../data/actions/categoryActions';

export default function useCategory() {
  const dispatch = useDispatch();
  dispatch(actions.fetchCategories());
  const parentId = useSelector((state) => state.category.activeCategory) || undefined;
  return useSelector((state) => Object.values(state.category.categories)
    .filter((category) => category.parent === parentId));
}
