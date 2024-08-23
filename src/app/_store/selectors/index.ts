import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from './product.reducer';

export const selectProductState = createFeatureSelector<fromProduct.State>(
  fromProduct.productFeatureKey
);

export const selectCategoryState = createFeatureSelector<fromProduct.State>(
  fromProduct.categoryFeatureKey
);

export const getProducts = createSelector(
  selectProductState,
  state => state
);

export const getProductCategories = createSelector(
  selectCategoryState,
  state => state
);
