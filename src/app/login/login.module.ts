import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserAdminComponent } from './login-user-admin/login-user-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const loginModuleRoutes: Routes = [
  {
    path: 'login',
    component: LoginUserAdminComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [LoginUserAdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(loginModuleRoutes)
  ]
})
export class LoginModule { }
