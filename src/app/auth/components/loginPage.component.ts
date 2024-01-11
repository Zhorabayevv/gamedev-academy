import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AlertService } from 'src/app/shared/alert/services/alert.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _alertService: AlertService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this._fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      //
    });
  }

  onSubmit(): void {
    const url = '/login';

    // this._authService.login(url, this.loginForm.value).subscribe(
    //   (response) => {
    //     console.log('response', response);
    //     const { token, refreshToken } = response.data?.tokens;
    //     this.cookieService.set('token', token);
    //     this.cookieService.set('refreshToken', refreshToken);
    //   },
    //   (error) => {
    //     const errorMessages = error['error']['errors'].join('\n');

    //     this._alertService.error(errorMessages, true);
    //   }
    // );

    this._alertService.success('Login successful' + this.loginForm.value.login);
  }
}
