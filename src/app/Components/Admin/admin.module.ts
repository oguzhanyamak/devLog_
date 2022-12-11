import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeModule } from '../home/home.module';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent,
    AdminlayoutComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule
  ],
  exports:[
    AdminlayoutComponent,
  ]
})
export class AdminModule { }
