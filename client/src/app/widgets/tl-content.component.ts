import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tl-content',
  template: `
    <div [class.closed]="!open" class="content">
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

      .closed {
        margin-left: 0;
      }
    `
  ]
})

export class TlContentComponent implements OnInit {
  @Input() open: boolean = true;

  constructor() {}

  ngOnInit() {

  }

}
