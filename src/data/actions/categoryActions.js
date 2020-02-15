import { normalize, schema } from 'normalizr';

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

const normalizeDatum = (originalData) => {
  const category = new schema.Entity('category', {}, {
    idAttribute: '_id',
  });
  const categorySchema = { category };
  const normalizedData = normalize(originalData, categorySchema);
  return normalizedData;
};

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

function shouldFetchCategories(state) {
  const categoryLength = Object.keys(state.category.categories).length;
  const { category: { isFetching, isInvalidated } } = state;
  return (!(categoryLength > 0 || isFetching) || isInvalidated);
}

function doFetchCategories() {
  return (dispatch) => {
    dispatch(requestCategories());
    return fetch('/api/categories')
      .then(
        data => data.json(),
        error => console.log('An error occurred.', error),
      )
      .then(json => normalizeData(json))
      .then(json => dispatch(receiveCategories(json.entities)));
  };
}

export function fetchCategories() {
  return (dispatch, getState) => {
    if (shouldFetchCategories(getState())) {
      return dispatch(doFetchCategories());
    }
    return Promise.resolve();
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

function requestAddNewCategory(data) {
  return {
    type: ADD_NEW_CATEGORY_REQUEST,
    data,
  };
}

function receiveAddNewCategory(json) {
  const { category } = json;
  return {
    type: ADD_NEW_CATEGORY_SUCCESS,
    category,
  };
}

export function addNewCategory(data) {
  return (dispatch) => {
    dispatch(requestAddNewCategory(data));
    return fetch('/api/category', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then(
        res => res.json(),
        error => console.log('An error occurred.', error),
      )
      .then(json => normalizeDatum(json))
      .then(json => dispatch(receiveAddNewCategory(json.entities)));
  };
}

function requestDeleteCategory(category) {
  return {
    type: DELETE_CATEGORY_REQUEST,
    category,
  };
}

function deleteCategorySuccess(categoryId) {
  return {
    type: DELETE_CATEGORY_SUCCESS,
    categoryId,
  };
}

export function deleteCategory(categoryId) {
  return (dispatch) => {
    dispatch(requestDeleteCategory(categoryId));
    return fetch(`api/category/${categoryId}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => dispatch(deleteCategorySuccess(categoryId)))
      .catch(error => console.log('An error occurred.', error));
  };
}
