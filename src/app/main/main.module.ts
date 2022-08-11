import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {SharedModule} from "../shared/shared.module";
import { GridComponent } from './grid/grid.component';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';

@NgModule({
  declarations: [MainComponent, GridComponent, FormComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    NgPersianDatepickerModule
  ],
  exports: [
  ]
})
export class MainModule { }
