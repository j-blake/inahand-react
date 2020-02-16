import store from '../data/store';
import * as actions from '../data/actions/categoryActions';

export default {
  fetchCategories: () => store.dispatch(actions.fetchCategories()),

  addNewCategory: (data) => {
    const formattedPostData = JSON.stringify(this.formatCategoryPostData(data));
    store.dispatch(actions.addNewCategory(formattedPostData));
  },

  formatCategoryPostData: (data) => {
    const { categoryName: name, parentId } = data;
    return { name, parent: parentId };
  },
};
