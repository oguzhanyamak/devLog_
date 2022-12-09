import { Component, OnInit } from '@angular/core';
import { login } from 'src/app/Interfaces/loginInterface';
import { DevLogApiService } from 'src/app/Services/dev-log-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:DevLogApiService) { }

  ngOnInit(): void {
  }
  element:any;
  token:any;
  temizle(){
    this.element = document.querySelector('[name="email"]');
    this.element.value="";
    this.element=document.querySelector('[name="passwd"]');
    this.element.value="";
  }

  login(data:login){
    this.temizle();
    this.service.post({endpoint:"Giris"},{email:data.email,password:data.password}).subscribe({
      next: (data) => {
        this.token = data;
        console.log(data);
      }, error: (error) => console.log(error), complete: () => console.info("Complete")
    })
  }

}
