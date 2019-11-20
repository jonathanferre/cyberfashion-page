import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _Categories = [];

class CategoryStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCategories() {
    return _Categories;
  }

  getCategoryBySlug(slug) {
    return _Categories.find(Category => Category.slug === slug);
  }
}

const store = new CategoryStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.DELETE_Category:
      _Categories = _Categories.filter(
        Category => Category.id !== parseInt(action.id, 10)
      );
      store.emitChange();
      break;
    case actionTypes.CREATE_Category:
      _Categories.push(action.Category);
      store.emitChange();
      break;
    case actionTypes.UPDATE_Category:
      _Categories = _Categories.map(Category =>
        Category.id === action.Category.id ? action.Category : Category
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_CategoryS:
      _Categories = action.Categorys;
      store.emitChange();
      break;
    default:
  }
});

export default store;
