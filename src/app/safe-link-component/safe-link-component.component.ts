import { Component, Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onClick($event)',
  }, //to listen the clicks and also use to create event
})
export class SafeLinkComponentComponent {
  /**
   *
   */
  constructor() {
    console.log('safe-link-component works!');
  }
  onClick(event: MouseEvent) {
    const wantsToLeave = window.confirm('Are you sure?');
    if (wantsToLeave) {
      return;
    }
    event.preventDefault();
  }
}
