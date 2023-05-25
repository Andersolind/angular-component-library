import {
  Component,
  OnInit,
  Input,
  Self,
  ViewChild,
  ElementRef,
  Optional,
  forwardRef,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  ControlValueAccessor,
  Validator,
  NgControl,
  ValidatorFn,
  Validators,
  AbstractControl,
  ValidationErrors,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  // @ViewChild('input', { static: false }) input: ElementRef;
  disabled: boolean = false;

  @Input() type = 'text';
  @Input() isRequired = false;
  @Input() pattern!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() errorMsg!: string;

  @Input() value: any;
  onChange: (newValue: Object | string) => void = () => {};

  @Output() input = new EventEmitter();
  onValueChange(newValue?: Object | string) {
    if (newValue === undefined) {
      this.onChange(this.value);
    } else {
      this.onChange(newValue);
      this.value = newValue;
    }
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  constructor() {}

  ngOnInit(): void {}

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onTouched() {}

  validate(control: AbstractControl): ValidationErrors | null {
    const validators: ValidatorFn[] = [];

    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    return validators;
  }
}
