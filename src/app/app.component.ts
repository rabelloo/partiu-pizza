import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';

@Component({
  selector: 'piz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  scrolled = false;

  onScroll(event) {
    this.scrolled = event.target.scrollTop > 0;
  }

}
