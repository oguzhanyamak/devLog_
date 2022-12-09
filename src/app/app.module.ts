import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './Components/home/home.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:"baseUrl",useValue:"https://localhost:7230",multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
