import { Component, Directive, input } from '@angular/core';

@Directive({
  //use of coustom directive
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
  queryParams = input('myapp');
  constructor() {
    console.log('safe-link-component works!');
  }
  onClick(event: MouseEvent) {
    const wantsToLeave = window.confirm('Are you sure?');
    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href =
        address + '?from=' + this.queryParams;
      return;
    }
    event.preventDefault();
  }
}
