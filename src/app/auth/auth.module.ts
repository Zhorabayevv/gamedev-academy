import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './components/loginPage.component';
import { UIModule } from '../shared/uiModule/uiModule.module';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UIModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginPageComponent],
  providers: [AuthService],
})
export class AuthModule {}
