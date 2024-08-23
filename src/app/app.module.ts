import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectionsComponent } from './interview-start/directions/directions.component';
import { InterviewStartComponent } from './interview-start/interview-start.component';
import { TimerToastComponent } from './interview-start/timer-toast/timer-toast.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

// import { ProductEffects } from './_store/effects';
// import { metaReducers, reducers } from './product/_store/product.reducer';

@NgModule({
  declarations: [AppComponent, DirectionsComponent, TimerToastComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatBottomSheetModule,
    // NGRX
    // StoreModule.forRoot(reducers, { metaReducers }),
    // EffectsModule.forRoot([ProductEffects]),

    //standalone component
    InterviewStartComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
