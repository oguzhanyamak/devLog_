import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.css']
})
export class AdminlayoutComponent implements OnInit {

  element: any
  element2: any
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.change();

  }

  change() {
    this.element = document.getElementById("logbtn");
    this.element.classList.add("invisible");
  }

  logOut() {
    localStorage.removeItem("token");
    this.router.navigate([""])
  }

}
