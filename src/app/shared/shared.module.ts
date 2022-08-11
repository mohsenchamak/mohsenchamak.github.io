import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "./layout/layout.component";
import {MaterialModule} from "../material/material.module";
import {OrdinaryGridComponent} from "./ordinary-grid/ordinary-grid.component";



@NgModule({
  declarations: [
    LayoutComponent,
    OrdinaryGridComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LayoutComponent,
    OrdinaryGridComponent
  ]
})
export class SharedModule { }
