import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction(
  '[Product] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: any }>()
);

export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: any }>()
);



export const loadProductCategories = createAction(
  '[Product] Load Product Categories'
);

export const loadProductCategoriesSuccess = createAction(
  '[Product] Load Product Categories Success',
  props<{ categories: any }>()
);

export const loadProductCategoriesFailure = createAction(
  '[Product] Load Product Categories Failure',
  props<{ error: any }>()
);
