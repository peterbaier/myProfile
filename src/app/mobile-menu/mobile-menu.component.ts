import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {
  menu;
  button;
  isMenuOpen = false;

  constructor() { }

  ngOnInit() {
    this.menu = document.getElementById('menu');
    this.button = document.getElementById('button');
  }

  toggleMenu() {
    if (!(this.menu.classList.contains('active'))) {
      this.menu.classList.toggle('active');
    } else {
      this.menu.classList.remove('active');
    }

    this.button.style.transform = 'rotate(180deg)';
    this.isMenuOpen = !this.isMenuOpen;
  }
}
