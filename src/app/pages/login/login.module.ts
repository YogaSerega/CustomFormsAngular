import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {InputModule} from '../../shared/components/input/input.module';
import {RouterModule, Routes} from '@angular/router';
import {ButtonModule} from '../../shared/components/button/button.module';

const routes: Routes = [{path: '', component: LoginComponent}]

@NgModule({
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    InputModule,
    ButtonModule
  ]
})
export class LoginModule {
}
