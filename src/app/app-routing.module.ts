import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { EmployeeModule } from './employee/employee.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginModule,
    AdminModule,
    EmployeeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
