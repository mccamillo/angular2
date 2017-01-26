import {Component, Input} from '@angular/core';

// Example of ng-content and property binding

@Component({
  selector: 'app-my-fieldset',
  template: `
    <fieldset>
      <legend>{{legend}}</legend>
      <ng-content></ng-content>
    </fieldset>
  `,
  styles: []
})
export class MyFieldsetComponent {
  @Input() legend: string = "Legend";
}
