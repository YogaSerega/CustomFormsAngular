import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {InputModule} from "../shared/components/input/input.module";
import {CheckboxModule} from "../shared/components/checkbox/checkbox.module";
import {ButtonComponent} from "../shared/components/button/button.component";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [LoginComponent,ButtonComponent],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    InputModule, CheckboxModule, MatButtonModule
  ]
})
export class AuthFormModule { }
