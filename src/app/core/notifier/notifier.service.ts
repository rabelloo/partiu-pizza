import { Injectable } from '@angular/core';

@Injectable()
export class Notifier {

  alert(message: string): void {
    window.alert(message);
  }

  confirm(message: string): boolean {
    return window.confirm(message);
  }

  prompt(message: string): string {
    return window.prompt(message);
  }

}
