import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  element:any;
  temizle(){
    this.element = document.querySelector('[name="email"]');
    this.element.value="";
    this.element=document.querySelector('[name="passwd"]');
    this.element.value="";
  }
  save(data:any){
    console.log(data);
    this.temizle();
  }

}
