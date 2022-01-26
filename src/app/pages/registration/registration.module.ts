import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationComponent} from './registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {InputModule} from '../../shared/components/input/input.module';
import {ButtonModule} from '../../shared/components/button/button.module';

const routes: Routes = [{path: '', component: RegistrationComponent}]

@NgModule({
  declarations: [
    RegistrationComponent,
  ],
  exports: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    InputModule,
    ButtonModule
  ]
})
export class RegistrationModule {
}
