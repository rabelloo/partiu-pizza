import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[ppHoverStretch]',
})
export class HoverStretchDirective {

  @HostBinding('class.pp-hover-stretch')
  private class = true;

}
