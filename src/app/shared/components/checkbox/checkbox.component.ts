import {Component, OnInit, forwardRef} from "@angular/core";
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR
} from "@angular/forms";
import {Subject, Subscription, takeUntil} from "rxjs";
import {Event} from "@angular/router";

@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.css"],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor, OnInit {

  public destroyed$: Subject<void> = new Subject<void>();

  public checked: boolean = false;
  public onChange: (value: string) => void = (value) => {
    console.log(value)
  }
  public onTouch: (event: Event) => {}
  public checkBoxControl = new FormControl()
  public valueChanges:Subscription

  public ngOnInit() {
 this._subscribeOnChange()
  }
  public writeValue(checked: boolean) {
    this.checked = checked;
  }
  public registerOnChange(fn: (value:string)=>{}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: ()=>{}): void {
    this.onTouch = fn;
  }
  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete()
  }

  private _subscribeOnChange(): Subscription {
    return this.checkBoxControl.valueChanges.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((value: string) => {
      this.onChange(value)
    })
  }
}