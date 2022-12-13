import { Component, OnInit } from '@angular/core';
import { DevLogApiService } from 'src/app/Services/dev-log-api.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {

  dorseler:any;
  constructor(private apiService:DevLogApiService) { }

  ngOnInit(): void {
    this.getDorseler();
  }

  getDorseler(){
    this.apiService.get({endpoint:"Trailer"}).subscribe({
      next: (data) => { this.dorseler = data },
      error: (error) => console.log(error),
      complete: () => { console.info("Complete") }
    })
  }

  saveTrailer(trailerkAdd:any,Form:NgForm){
    trailerkAdd.dorseTemsiliResim ="-";
    this.apiService.post({endpoint:"Trailer"},trailerkAdd).subscribe({
      next: (data) => { console.log(data)},
      error: (error) => console.log(error),
      complete: () => { console.info("Complete") }
    });
    this.resetForm(Form);
    this.getDorseler();
  }
  resetForm(Form: NgForm) {
    Form.resetForm();
  }

}
