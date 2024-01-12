import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { AlertService } from 'src/app/shared/alert/services/alert.service';
import { AuthService } from '../services/auth.service';
import { ILoginResponse } from '../types/loginResponse.interface';

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
    private _router: Router,
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

    this._authService.login(url, this.loginForm.value).subscribe({
      next: (response: ILoginResponse) => {
        const { userInfo } = response;
        const { token, refreshToken } = response.tokens;

        this.cookieService.set('token', token);
        this.cookieService.set('refreshToken', refreshToken);
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        this._router.navigate(['/admin']);
        this._alertService.success('Успешная авторизация', true);
      },
      error: (error: any) => {
        const errorMessages = error['error']?.['errors']?.join('\n');

        this._alertService.error(errorMessages, true);
      },
    });
  }
}
