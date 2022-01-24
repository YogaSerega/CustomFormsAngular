import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

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
export class DropdownComponent<T extends Record<string, any>> implements ControlValueAccessor {
  @Input() public options: T[] = [];
  @Input() public keyValue: keyof T
  @Input() public keyName: keyof T
  public selectedOption: T;
  public open: boolean = false;
  public state: string  = 'Choose something...'
  public onChange: (value: string) => void = (value) => {
    console.log(value)
  }
  public onTouched: () => void = ()=>{}
  public trackByFn:(index:number)=>number=(index) => index;
  public toggleOpen: () => void =()=> this.open = !this.open;
  public optionSelect(option: T) {
    this.state = option[this.keyName]
    this.onChange(option[this.keyValue]);
    this.onTouched();
    this.open = false;
  }
  public get isOpen(): boolean {
    return this.open;
  }
  public writeValue(value: string) {
  }
  public registerOnChange(fn: () => void) {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
}
