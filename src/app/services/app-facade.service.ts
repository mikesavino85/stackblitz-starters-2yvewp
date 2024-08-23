import { Injectable } from '@angular/core';
import { map, takeWhile, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppFacadeService {
  timeLeft: number = 600; // 10 mins in ms / 1000, factor re-applied in map()

  constructor() { }

  // store interactions go below

  getProductState() {
    //
  }

  getCategoryState() {
    //
  }

  getCategoryListState() {
    //
  }
}
