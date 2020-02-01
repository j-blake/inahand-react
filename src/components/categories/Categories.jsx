import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../data/actions/categoryActions';
import CategoryService from './CategoryService';
import CategoryView from './CategoryView';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount = () => CategoryService.fetchCategories()

  render = () => <CategoryView {...this.props} />
}

function mapStateToProps(state) {
  const {
    category: {
      categories = {},
      receivedAt,
      isAddCategoryModalOpen: isModalOpen,
      activeCategory,
    },
  } = state;
  const date = new Date(receivedAt);
  const dateString = date.toLocaleTimeString();
  const categoriesArray = Object.values(categories);
  const parentId = activeCategory || undefined;
  const parentName = activeCategory ? categories[activeCategory].name : undefined;
  const visibleCategories = categoriesArray.filter(category => category.parent === parentId);
  const previousId = activeCategory ? categories[activeCategory].parent : undefined;
  return {
    categories: visibleCategories,
    receivedAt: dateString,
    isModalOpen,
    previousId,
    parentId,
    parentName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClickFab: () => dispatch(actions.openAddCategoryModal()),
    onClickCategory: id => dispatch(actions.selectCategory(id)),
    onClickBack: id => dispatch(actions.selectCategory(id)),
    onClickDelete: id => dispatch(actions.deleteCategory(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
