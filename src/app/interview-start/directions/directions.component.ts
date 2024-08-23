import { Component, Inject } from '@angular/core';
import { AppFacadeService } from '../../services/app-facade.service';
import { TimerToastComponent } from '../timer-toast/timer-toast.component';
import {
  MatBottomSheet,
  MatBottomSheetConfig,
} from '@angular/material/bottom-sheet';
import { Subscription } from 'rxjs';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';

@Component({
  selector: 'directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss'],
})
export class DirectionsComponent {
  private subscription!: Subscription;

  constructor(
    private appFacade: AppFacadeService,
    readonly bottomSheet: MatBottomSheet,
    private readonly sso: ScrollStrategyOptions
  ) {}

  ngOnInit() {
    const scrollStrategy: ScrollStrategy = this.sso.noop();
    const config: MatBottomSheetConfig = {
      hasBackdrop: false,
      disableClose: true,
      scrollStrategy,
    };
    this.openBottomSheet(config);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  openBottomSheet(config?: MatBottomSheetConfig) {
    return this.bottomSheet.open(TimerToastComponent, config);
  }

  openSnackBar(step: string) {
    let base = 'https://stackblitz.com/edit/stackblitz-starters-qy2m7a?file=';
    let url = '';
    switch (step) {
      case 'step1':
        url = `${base}package.json`;
        break;
      case 'step2':
        break;
      case 'step3':
        break;
      case 'step4':
        break;
      case 'step5':
        break;
      case 'step6':
        break;
      default:
        url = `${base}package.json`;
        break;
    }
  }
}
