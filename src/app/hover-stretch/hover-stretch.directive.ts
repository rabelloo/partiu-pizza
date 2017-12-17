import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[pizHoverStretch]',
})
export class HoverStretchDirective {

  @HostBinding('class.piz-hover-stretch')
  private class = true;

}
