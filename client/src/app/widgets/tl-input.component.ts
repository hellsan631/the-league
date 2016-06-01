import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tl-input',
  template: `
    <div class="input-field">
      <input 
        #input="ngForm"
        ngControl="input"
        [type]="type"
        [attr.name]="name"
        [attr.max]="max"
        [attr.maxlength]="maxLength"
        [attr.min]="min"
        [attr.minlength]="minLength"
        [disabled]="disabled"
        [required]="required"
        [placeholder]="placeholder" 
        [(ngModel)]="value" />
      <label [class.active]="input.dirty" [attr.for]="name">{{label}}</label>
    </div>
  `,
  styles:[
    `
      tl-input {
        
      }
    `
  ]
})

export class TlInputComponent implements OnInit {
  @Input() name: string;
  @Input() label: string;
  @Input() value: any;
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() max: string = null;
  @Input() maxLength: number = null;
  @Input() min: string = null;
  @Input() minLength: number = null;
  @Input() placeholder: string = null;

  constructor() {}

  ngOnInit() {
  }

}
