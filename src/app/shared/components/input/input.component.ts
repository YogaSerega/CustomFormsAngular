import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl} from "@angular/forms";
import {Event} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }]
})

export class InputComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() public type: 'text' | 'email' | 'password' | 'number ' = 'text';
  @Input() public placeholder: string = 'Enter your name';
  public destroyed$: Subject<void> = new Subject<void>();
  public inputControl = new FormControl();
  public onChange: (value: string) => void = (value) => {
  }
  public onTouch: (event: Event) => {}

  public writeValue(value: string) {
    this.inputControl.patchValue(value, {emitEvent: false});
  }

  public registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: (event: Event) => {}) {
    this.onTouch = fn;
  }

  public ngOnInit(): void {
    this._subscribeOnChange()
  }

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete()
  }

  private _subscribeOnChange(): void {
    this.inputControl.valueChanges
      .pipe(
        takeUntil(this.destroyed$)
      ).subscribe(
      (value: string) => this.onChange(value)
    );
  }
}
