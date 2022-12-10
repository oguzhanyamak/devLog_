import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './Components/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  exports:[
    ToastrModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide:"baseUrl",useValue:"https://localhost:7230",multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
