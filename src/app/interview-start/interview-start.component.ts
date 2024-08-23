import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'interview-start',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatToolbarModule,
  ],
  templateUrl: './interview-start.component.html',
  styleUrls: ['./interview-start.component.scss'],
})
export class InterviewStartComponent {
  constructor() {}
}
