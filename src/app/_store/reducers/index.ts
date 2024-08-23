import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer, createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';

export const productFeatureKey = 'products';
export const categoryFeatureKey = 'categories';

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

export interface State {
  products: any;
  categories: any;
}

export const initialState: State = {
  products: [],
  categories: [],
};

export const prodReducers = createReducer(
  initialState,

  on(ProductActions.loadProducts, state => state),
  on(ProductActions.loadProductsSuccess, (state, action) => action.products),
  on(ProductActions.loadProductsFailure, (state, action) => action.error),
);

export const catReducers = createReducer(
  initialState,

  on(ProductActions.loadProductCategories, state => state),
  on(ProductActions.loadProductCategoriesSuccess, (state, action) => action.categories),
  on(ProductActions.loadProductCategoriesFailure, (state, action) => action.error),

);

export const reducers: ActionReducerMap<State> = {
  products: prodReducers,
  categories: catReducers,
};
