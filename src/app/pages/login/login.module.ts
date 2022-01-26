import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonComponent} from '../../shared/components/button/button.component';
import {InputModule} from '../../shared/components/input/input.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{path: '', component: LoginComponent}]

@NgModule({
  declarations: [
    LoginComponent, ButtonComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, InputModule
  ]
})
export class LoginModule {
}
