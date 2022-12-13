import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { tir } from 'src/app/Interfaces/tirInterface';
import { DevLogApiService } from 'src/app/Services/dev-log-api.service';
import { MsmService } from 'src/app/Services/msm.service';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})
export class TrucksComponent implements OnInit {
  constructor(private apiservice: DevLogApiService, private truck: MsmService) {
  }

  tirlar: tir[] |any;
  Marka: any = [];
  Seri: any = [];
  Model: any = [];

  ngOnInit(): void {
    this.getTirlar();
    this.Marka = this.truck.marka();
  }


  saveTruck(data: any, userForm: NgForm) {
    data.vitesTuru = data.vitesTuru == "1" ? true : false;
    data.yakıtTuru = data.yakıtTuru == "1" ? true : false;
    console.log(data);
    this.apiservice.post({ endpoint: "Trucks" }, data).subscribe({
      next: (data) => { console.log(data) },
      error: (error) => console.log(error),
      complete: () => { console.info("Complete") }
    });
    this.resetUserForm(userForm);
  }

  resetUserForm(userForm: NgForm) {
    userForm.resetForm();;
  }

  onCheckboxChange(data:any){

  }

  getTirlar() {
    this.tirlar = this.apiservice.get({ endpoint: "Trucks" }).subscribe({
      next: (data) => { this.tirlar = data },
      error: (error) => console.log(error),
      complete: () => { console.info("Complete") }
    });
  }

  onSelect(state: any) {
    this.Seri = this.truck.seri().filter(e => e.id == state.target.value);
    this.onSelected(0);
  }
  onSelected(state: any) {
    this.Model = this.truck.model().filter(e => e.sid == state.target.value);
  }

}
