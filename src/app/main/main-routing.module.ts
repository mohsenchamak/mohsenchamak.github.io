import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GridComponent} from "./grid/grid.component";
import {AuthGuardService} from "../core-services/auth-guard.service";
import {FormComponent} from "./form/form.component";
import {MainComponent} from "./main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'list',
        component: GridComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'form',
        component: FormComponent,
        canActivate: [AuthGuardService]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuardService
  ]
})
export class MainRoutingModule { }
