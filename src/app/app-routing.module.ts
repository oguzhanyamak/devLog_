import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlayoutComponent } from './Components/Admin/adminlayout/adminlayout.component';
import { DashboardComponent } from './Components/Admin/dashboard/dashboard.component';
import { JobsDetailComponent } from './Components/Admin/jobs-detail/jobs-detail.component';
import { JobsComponent } from './Components/Admin/jobs/jobs.component';
import { TrailerComponent } from './Components/Admin/trailer/trailer.component';
import { TrucksDetailComponent } from './Components/Admin/trucks-detail/trucks-detail.component';
import { TrucksComponent } from './Components/Admin/trucks/trucks.component';
import { MainComponent } from './Components/home/main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'Admin',component:AdminlayoutComponent,children:[
    {path:'',component:DashboardComponent},
    {path:'Trucks',component:TrucksComponent},
    {path:"Trucks/:plaka",component:TrucksDetailComponent},
    {path:"Jobs",component:JobsComponent},
    {path:"Jobs/:Id",component:JobsDetailComponent},
    {path:"Trailer",component:TrailerComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
