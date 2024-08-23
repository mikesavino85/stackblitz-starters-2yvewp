import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import * as ProductActions from './product.actions';


@Injectable()
export class ProductEffects {

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ProductActions.loadProducts),
      concatMap(() =>
        from(this.service.getProducts()).pipe(
          map(data => ProductActions.loadProductsSuccess({ products: data.products })),
          catchError(error => of(ProductActions.loadProductsFailure({ error }))))
      )
    );
  });

  loadProductCategories$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ProductActions.loadProductCategories),
      concatMap(() =>
        from(this.service.getCategories()).pipe(
          map(data => ProductActions.loadProductCategoriesSuccess({ categories: data })),
          catchError(error => of(ProductActions.loadProductCategoriesFailure({ error }))))
      )
    );
  });

  constructor(
    private actions$: Actions,
    private service: ProductService
  ) {}
}
