import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tl-content',
  template: `
    <div [class.open]="open" class="content">
      <ng-content></ng-content>
    </div>
  `,
  styles:[
    `
      .content {
        display: block;
        width: auto;
        margin-left: 240px;
      }

      .open {
        margin-left: 0;
      }
    `
  ]
})

export class TlContentComponent {
  @Input() open: boolean = true;

  constructor() {}
}
