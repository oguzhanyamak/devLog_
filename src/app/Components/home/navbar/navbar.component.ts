import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login, loginresponse } from 'src/app/Interfaces/loginInterface';
import { AlertService, CMessageType, CPosition } from 'src/app/Services/alert.service';
import { DevLogApiService } from 'src/app/Services/dev-log-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:DevLogApiService,private alert:AlertService,private router:Router) { }

  ngOnInit(): void {
  }
  element:any;
  wrapper:any;
  token:any;

  temizle(){
    this.element = document.querySelector('[name="email"]');
    this.element.value="";
    this.element=document.querySelector('[name="password"]');
    this.element.value="";
  }

  login(data:login){
    this.temizle();
    this.service.post<loginresponse>({endpoint:"Giris"},{email:data.email,password:data.password}).subscribe({
      next: (data) => {
        if(data.status === false){
          this.alert.message("Hatalı Kullanıcı Adı Veya Şifre","Hata",CMessageType.Error,CPosition.TopRight);
        }
        else{
          window.localStorage.setItem("token",data.token);
          this.alert.message("Giriş Başarılı","Başarılı",CMessageType.Success,CPosition.TopRight);
          this.router.navigate(['Admin'])
        }
        console.log(data);
      }, error: (error) => console.log(error), complete: () => console.info("Complete")
    })
  }
}
