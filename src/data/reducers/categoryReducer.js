import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  SELECT_CATEGORY,
  INVALIDATE_CATEGORIES,
  ADD_NEW_CATEGORY_REQUEST,
  ADD_NEW_CATEGORY_SUCCESS,
  OPEN_ADD_CATEGORY_MODAL,
  CLOSE_ADD_CATEGORY_MODAL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
} from '../actions/categoryActions';

function recursiveDeleteCategories(categoryId, categoriesFromState) {
  const categoryList = Object.assign({}, categoriesFromState);
  delete categoryList[categoryId];
  return categoryList;
}

function findChildCategories(categoryId, categoryList) {
  return;
}

export default function categories(state = {
  isFetching: false,
  categories: {},
  activeCategory: null,
  receivedAt: null,
  isInvalidated: false,
  isAddCategoryModalOpen: false,
}, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case FETCH_CATEGORIES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isInvalidated: false,
        categories: action.categories,
        receivedAt: action.receivedAt,
      });
    case SELECT_CATEGORY:
      return Object.assign({}, state, {
        activeCategory: action.category,
      });
    case INVALIDATE_CATEGORIES:
      return Object.assign({}, state, {
        isInvalidated: true,
      });
    case OPEN_ADD_CATEGORY_MODAL:
      return Object.assign({}, state, {
        isAddCategoryModalOpen: true,
      });
    case CLOSE_ADD_CATEGORY_MODAL:
      return Object.assign({}, state, {
        isAddCategoryModalOpen: false,
      });
    case ADD_NEW_CATEGORY_REQUEST:
      return Object.assign({}, state, {
        // todo need a state here?
      });
    case ADD_NEW_CATEGORY_SUCCESS:
      return Object.assign({}, state, {
        isAddCategoryModalOpen: false,
        categories: { ...state.categories, ...action.category },
      });
    case DELETE_CATEGORY_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case DELETE_CATEGORY_SUCCESS: {
      // todo recursive delete categories from state
      const updatedCategories = recursiveDeleteCategories(action.categoryId, state.categories);
      return Object.assign({}, state, { categories: updatedCategories }, { isFetching: false });
    }
    default:
      return state;
  }
}
