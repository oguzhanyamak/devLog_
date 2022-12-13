import { Component, OnInit } from '@angular/core';
import { DevLogApiService } from 'src/app/Services/dev-log-api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private apiservice:DevLogApiService) { }

  yukler:any;

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(){
    this.apiservice.get({endpoint:"Jobs"}).subscribe({
      next: (data) => { this.yukler=data,console.log(data)},
      error: (error) => console.log(error),
      complete: () => { console.info("Complete") }
    })
  }
}
