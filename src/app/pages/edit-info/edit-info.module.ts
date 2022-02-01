import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditInfoComponent} from './edit-info.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {InputModule} from '../../shared/components/input/input.module';
import {ButtonModule} from '../../shared/components/button/button.module';


const routes: Routes = [{path: '', component: EditInfoComponent}]

@NgModule({
  declarations: [EditInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    InputModule,
    ButtonModule
  ],
  exports: [EditInfoComponent]
})
export class EditInfoModule {
}
