import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[pizContainer]'
})
export class ContainerDirective {

  @HostBinding('class.piz-container')
  private class = true;

}
