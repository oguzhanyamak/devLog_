import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    NavbarComponent,
    MainComponent,
  ]
})
export class HomeModule { }
