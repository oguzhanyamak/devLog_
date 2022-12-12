import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeModule } from '../home/home.module';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { RouterModule } from '@angular/router';
import { TrucksComponent } from './trucks/trucks.component';
import { FormsModule } from '@angular/forms';
import { TrucksDetailComponent } from './trucks-detail/trucks-detail.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    AdminlayoutComponent,
    TrucksComponent,
    TrucksDetailComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    AdminlayoutComponent,
  ]
})
export class AdminModule { }
