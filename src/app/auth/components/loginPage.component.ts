import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/uiModule/alert/services/alert.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _fb: FormBuilder, private _alertService: AlertService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      //
    });
  }

  onSubmit(): void {
    this._alertService.success('Login successful');
  }
}
