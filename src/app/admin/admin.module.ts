import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminPanelComponent } from './component/adminPanel.component';
import { AuthService } from '../auth/services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AdminPanelComponent],
  providers: [AuthService],
})
export class AdminModule {}
