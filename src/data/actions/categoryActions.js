export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const INVALIDATE_CATEGORIES = 'INVALIDATE_CATEGORIES';
export const ADD_NEW_CATEGORY_REQUEST = 'ADD_NEW_CATEGORY_REQUEST';
export const ADD_NEW_CATEGORY_SUCCESS = 'ADD_NEW_CATEGORY_SUCCESS';
export const ADD_NEW_CATEGORY_FAILURE = 'ADD_NEW_CATEGORY_FAILURE';
export const OPEN_ADD_CATEGORY_MODAL = 'OPEN_ADD_CATEGORY_MODAL';
export const CLOSE_ADD_CATEGORY_MODAL = 'CLOSE_ADD_CATEGORY_MODAL';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const DELETE_CATEGORY_REQUEST = 'DELETE_CATEGORY_REQUEST';
export const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS';
export const DELETE_CATEGORY_FAILURE = 'DELETE_CATEGORY_FAILURE';

export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    category,
  };
}

export function requestCategories() {
  return {
    type: FETCH_CATEGORIES_REQUEST,
  };
}

export function requestFailed() {
  return {
    type: FETCH_CATEGORIES_FAILURE,
  };
}

export function receiveCategories(entities) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories: entities.categories,
    receivedAt: Date.now(),
  };
}

export function invalidateCategories() {
  return {
    type: INVALIDATE_CATEGORIES,
  };
}

export function openAddCategoryModal() {
  return {
    type: OPEN_ADD_CATEGORY_MODAL,
  };
}

export function closeAddCategoryModal() {
  return {
    type: CLOSE_ADD_CATEGORY_MODAL,
  };
}

export function requestAddNewCategory(data) {
  return {
    type: ADD_NEW_CATEGORY_REQUEST,
    data,
  };
}

export function receiveAddNewCategory(json) {
  const { category } = json;
  return {
    type: ADD_NEW_CATEGORY_SUCCESS,
    category,
  };
}

export function requestDeleteCategory(category) {
  return {
    type: DELETE_CATEGORY_REQUEST,
    category,
  };
}

export function deleteCategorySuccess(categoryId) {
  return {
    type: DELETE_CATEGORY_SUCCESS,
    categoryId,
  };
}
