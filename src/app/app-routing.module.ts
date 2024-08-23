import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './routes';


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
