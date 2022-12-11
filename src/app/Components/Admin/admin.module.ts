import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeModule } from '../home/home.module';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { RouterModule } from '@angular/router';
import { TrucksComponent } from './trucks/trucks.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DashboardComponent,
    AdminlayoutComponent,
    TrucksComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    AdminlayoutComponent,
  ]
})
export class AdminModule { }
