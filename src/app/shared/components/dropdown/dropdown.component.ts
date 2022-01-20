import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

interface selectOption {
  title: string;
  value: string
}

@Component({
  selector: 'app-dropdown',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    }
  ],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements ControlValueAccessor {

  @Input() public options: selectOption[] = [];

  public selectedOption: selectOption;
  public open: boolean = false;
  public state: string  = 'Choose something...'

  public onChange: (value: string) => void = (value) => console.log(value)
  public onTouched: () => void = ()=>{}

  public toggleOpen() {
    this.open = !this.open;
  }
  public optionSelect(option: selectOption) {
    this.writeValue(option.value);
    this.onTouched();
    this.open = !this.open;
  }
  public get isOpen(): boolean {
    return this.open;
  }

  public writeValue(value: string) {
    const selectedEl = this.options.find(el => el.value === value)
    this.state = selectedEl!.value
    if (selectedEl) {
      this.selectedOption = selectedEl;
      this.onChange(this.selectedOption.value);
    }
  }

  public registerOnChange(fn: () => void) {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
}
