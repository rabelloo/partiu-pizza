import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[ppContainer]'
})
export class ContainerDirective {

  @HostBinding('class.pp-container')
  private class = true;

}
