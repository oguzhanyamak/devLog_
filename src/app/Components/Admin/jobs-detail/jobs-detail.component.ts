import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevLogApiService } from 'src/app/Services/dev-log-api.service';

@Component({
  selector: 'app-jobs-detail',
  templateUrl: './jobs-detail.component.html',
  styleUrls: ['./jobs-detail.component.css']
})
export class JobsDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private apiservice: DevLogApiService) { }

  tir:any;
  yukBilgi:any;
  ngOnInit(): void {
    const Id = this.route.snapshot.paramMap.get('Id');
    this.ara(Id);
  }

  ara(Id:any) {
    this.apiservice.get({ endpoint: "Jobs" }, Id.toUpperCase()).subscribe({
      next: (data) => {
        this.yukBilgi = data;
        console.log(this.yukBilgi);
      }, error: (error) => console.log(error), complete: () => console.info("Complete")
    });
  }

}
