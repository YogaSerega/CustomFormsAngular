import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {InputModule} from "../shared/components/input/input.module";
import {CheckboxModule} from "../shared/components/checkbox/checkbox.module";
import {ButtonComponent} from "../shared/components/button/button.component";
import {DropdownModule} from "../shared/components/dropdown/dropdown.module";
import {ReactiveFormsModule} from "@angular/forms";
import { RegistrationComponent } from './registration/registration.component';
import { TrainComponent } from './train/train.component';



@NgModule({
  declarations: [LoginComponent,ButtonComponent, RegistrationComponent, TrainComponent],
  exports: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        InputModule, CheckboxModule, DropdownModule, ReactiveFormsModule
    ]
})
export class AuthFormModule { }
