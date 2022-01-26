import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckboxModule} from '../../shared/components/checkbox/checkbox.module';
import {DropdownModule} from '../../shared/components/dropdown/dropdown.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TrainComponent} from './train.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{path: '', component: TrainComponent}]

@NgModule({
  declarations: [TrainComponent],
  exports: [
    TrainComponent
  ],
  imports: [
    CommonModule,
   CheckboxModule, DropdownModule, ReactiveFormsModule, RouterModule.forChild(routes)
  ]
})
export class TrainModule {
}
