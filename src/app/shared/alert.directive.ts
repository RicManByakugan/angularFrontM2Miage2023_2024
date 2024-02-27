import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: `[alert]`
})
export class AlertDirective {
  @HostListener('click', ['$event'])
  run(event: Event) {
    alert('Hello World')
  }
}