import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevLogApiService } from 'src/app/Services/dev-log-api.service';

@Component({
  selector: 'app-trucks-detail',
  templateUrl: './trucks-detail.component.html',
  styleUrls: ['./trucks-detail.component.css']
})
export class TrucksDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private apiservice: DevLogApiService) { }

  tir:any;
  ngOnInit(): void {
    const plaka = this.route.snapshot.paramMap.get('plaka');
    this.ara(plaka);
  }

  ara(Plaka:any) {
    this.apiservice.get({ endpoint: "Trucks" }, Plaka.toUpperCase()).subscribe({
      next: (data) => {
        this.tir = data;
        console.log(data);
      }, error: (error) => console.log(error), complete: () => console.info("Complete")
    });
  }
}
