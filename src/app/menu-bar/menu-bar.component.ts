import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(){
    const menu = document.getElementById("about");

    if(!(menu.classList.contains('active-menu'))){
      menu.classList.toggle("active-menu");
    } else {
      menu.classList.remove("active-menu");
    }
  }

}
