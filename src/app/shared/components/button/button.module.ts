import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ]
})
export class ButtonModule {
}
