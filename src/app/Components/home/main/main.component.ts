import { Component, OnInit } from '@angular/core';
import { DevLogApiService } from 'src/app/Services/dev-log-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private apiservice: DevLogApiService) { }
  data: any = "Takip Numarası Hatalı"
  load: any;
  ngOnInit(): void {
    this.change();
  }

  element: any;
  change() {
    this.element = document.getElementById("logbtn");
    this.element.classList.remove("invisible");
  }

  takipGetir(data: string) {
    this.apiservice.get({ endpoint: "Jobs" }, data).subscribe({
      next: (data) => {
        this.data = data;
      }, error: (error) => console.log(error), complete: () => {
        console.info("Complete");
        this.temizle();
        if (this.data.durum === true) {
          this.load = "25%"
        }
        else {
          this.load = "100%"
        }
      }
    })
  }

  temizle() {
    this.element = document.querySelector('[name="TakipNo"]');
    this.element.value = "";
  }
}
