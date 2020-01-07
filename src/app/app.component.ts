import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import * as emailjs from 'emailjs-com';
import { environment } from '../environments/environment';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    form: FormGroup;
    sendingEmail = false;
    emptyForm = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', [Validators.required]),
    });

    constructor(private readonly formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        this.form = this.emptyForm;
    }

    onSubmit() {
        this.sendingEmail = true;
        const params = {
            email: this.form.controls.email.value,
            message: this.form.controls.message.value
        };

        emailjs.send(environment.emailJsServiceId, environment.emailJsTemplateId, params, environment.emailJsUserId)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                this.handleResponse('Email has been sent successfully!');
                this.form.controls.email.setValue('');
                this.form.controls.message.setValue('');
            }, (err) => {
                console.log('FAILED...', err);
                this.handleResponse('Email has failed, please try to send it again!');
            });
    }

    goTo(url: string) {
        window.location.href = url;
    }

    private handleResponse(message: string) {
        this.sendingEmail = false;

        this.snackBar.open(message, '', {
            duration: 4000,
            verticalPosition: 'top',
            politeness: 'polite'
        });
    }
}
