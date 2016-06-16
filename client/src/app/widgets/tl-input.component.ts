import { 
  Component, 
  Input,
  Output,
  OnInit,
  EventEmitter
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tl-input',
  template: `
    <div class="input-field">
      <input
        [type]="type"
        [attr.name]="name"
        [attr.max]="max"
        [attr.maxlength]="maxLength"
        [attr.min]="min"
        [attr.minlength]="minLength"
        [disabled]="disabled"
        [required]="required"
        [ngModel]="value"
        (ngModelChange)="onValueChange($event)"
        (focus)="handleEvent($event)"
        (blur)="handleEvent($event)" />
      {{ placeholder }}
      <label [class.active]="_active" [attr.for]="name">{{label}}</label>
    </div>
    
  `,
  styles: [
    `
      input:not([type]), 
      input[type=text], 
      input[type=password], 
      input[type=email], 
      input[type=url], 
      input[type=time], 
      input[type=date], 
      input[type=datetime], 
      input[type=datetime-local], 
      input[type=tel], 
      input[type=number], 
      input[type=search] {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #9e9e9e;
        border-radius: 0;
        outline: none;
        height: 3rem;
        width: 100%;
        font-size: 1rem;
        margin: 0 0 15px 0;
        padding: 0;
        box-shadow: none;
        box-sizing: content-box;
        transition: all 0.3s;
      }

      input {
        line-height: normal;
      }

      .input-field label {
        color: #9e9e9e;
        position: absolute;
        top: 0.8rem;
        font-size: 1rem;
        cursor: text;
        transition: .2s ease-out;
      }

      input:not([type]) + label:after, 
      input[type=text] + label:after, 
      input[type=password] + label:after, 
      input[type=email] + label:after, 
      input[type=url] + label:after, 
      input[type=time] + label:after, 
      input[type=date] + label:after, 
      input[type=datetime] + label:after, 
      input[type=datetime-local] + 
      label:after, input[type=tel] + label:after, 
      input[type=number] + label:after, 
      input[type=search] + label:after {
        display: block;
        content: "";
        position: absolute;
        top: 65px;
        opacity: 0;
        transition: .2s opacity ease-out, .2s color ease-out;
      }

      .input-field label.active {
        font-size: 0.8rem;
        transform: translateY(-140%);
      }

      input:not([type]):focus:not([readonly]), 
      input[type=text]:focus:not([readonly]), 
      input[type=password]:focus:not([readonly]), 
      input[type=email]:focus:not([readonly]), 
      input[type=url]:focus:not([readonly]), 
      input[type=time]:focus:not([readonly]), 
      input[type=date]:focus:not([readonly]), 
      input[type=datetime]:focus:not([readonly]), 
      input[type=datetime-local]:focus:not([readonly]), 
      input[type=tel]:focus:not([readonly]), 
      input[type=number]:focus:not([readonly]), 
      input[type=search]:focus:not([readonly]) {
        border-bottom: 1px solid #26a69a;
        box-shadow: 0 1px 0 0 #26a69a;
      }

      .input-field {
        position: relative;
        margin-top: 1rem;
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

  private _targetClasses: string = null;
  private _active: boolean = false;

  @Output() valueChange = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.name = this.name || this.label;
  }

  /**
   * Handles two-way data binding with ngModel between this and parent components
   */
	onValueChange(value) {
    this.value = value;
		this.valueChange.next(value);
	}

  handleEvent(event) {
    this._targetClasses = event.target.className;
    this._active = event.type === 'focus' || !this.isEmpty();
  }

  isEmpty(): boolean { 
    return this.value == null || this.value === '' || typeof this.value === 'undefined'; 
  }

}
