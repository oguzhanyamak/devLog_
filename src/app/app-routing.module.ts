import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlayoutComponent } from './Components/Admin/adminlayout/adminlayout.component';
import { DashboardComponent } from './Components/Admin/dashboard/dashboard.component';
import { TrucksDetailComponent } from './Components/Admin/trucks-detail/trucks-detail.component';
import { TrucksComponent } from './Components/Admin/trucks/trucks.component';
import { MainComponent } from './Components/home/main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'Admin',component:AdminlayoutComponent,children:[
    {path:'',component:DashboardComponent},
    {path:'Trucks',component:TrucksComponent},
    {path:"Trucks/:plaka",component:TrucksDetailComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
