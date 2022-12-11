import { Component, OnInit } from '@angular/core';
import { DevLogApiService } from 'src/app/Services/dev-log-api.service';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})
export class TrucksComponent implements OnInit {

  table:any;
  loader:any;
  constructor(private apiservice:DevLogApiService) { 
  }

  tirlar:any;

  ngOnInit(): void {
    this.getTirlar();
  }

  getTirlar(){
    this.tirlar = this.apiservice.get({endpoint: "Trucks"}).subscribe({
      next: (data) => {
        this.tirlar = data;
        console.log(this.tirlar);
      }, error: (error) => console.log(error), complete: () => 
      {
        console.info("Complete");
      }
    });
  }

  ara(Plaka:string){
    this.apiservice.get({endpoint:"Trucks"},Plaka.toUpperCase()).subscribe({
      next: (data) => {
        this.tirlar = data;
        console.log(data);
      }, error: (error) => console.log(error), complete: () => console.info("Complete")
    });
  }


}
