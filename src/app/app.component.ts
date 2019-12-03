import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    isHamburger = true;
    dropdown;
    hamburgerIcon;
    iam;

    form: FormGroup;

    constructor(private readonly formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            message: new FormControl('', [Validators.required]),
        });
    }

    openMenu() {
        this.dropdown.style.height = '10rem';
        this.dropdown.style.top = '0';
        this.dropdown.style.borderRadius = '0 0 0 0';
        this.hamburgerIcon.style.transform = 'rotateX(90deg)';
        this.isHamburger = false;
    }

    closeMenu() {
        this.dropdown.style.height = '0';
        this.dropdown.style.top = '0';
        this.dropdown.style.borderRadius = '0 0 0 100%';
        this.isHamburger = true;
        this.hamburgerIcon.style.transform = 'rotateX(0deg)';
    }

    ngAfterViewInit(): void {
        this.dropdown = document.getElementById('dropdown');
        this.hamburgerIcon = document.getElementById('hamburgerIcon');
        this.iam = document.getElementById('iam');
    }
}
