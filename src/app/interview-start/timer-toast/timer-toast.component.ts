import { Component } from '@angular/core';
import { AppFacadeService } from '../../services/app-facade.service';
import { Observable, map, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'timer-toast',
  templateUrl: './timer-toast.component.html',
  styleUrls: ['./timer-toast.component.scss'],
})
export class TimerToastComponent {
  timeLeft = 6000;
  timeLeft$!: Observable<number>;

  constructor(private appFacade: AppFacadeService) {}

  ngOnInit() {
    this.timeLeft$ = this.startTimer();
  }

  startTimer() {
    return timer(0, 1000).pipe(
      map((val) => (this.timeLeft - val) * 1000),
      takeWhile((n) => n >= 0)
    );
  }
}
