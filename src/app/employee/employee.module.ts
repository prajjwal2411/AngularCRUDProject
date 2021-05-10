import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SomeGuard } from '../guards/proguard.guard';

const employeeModuleRoutes: Routes = [
  {
    path: 'employdash',
    component: EmployeeDashboardComponent,
    canActivate: [SomeGuard]
  },
]

@NgModule({
  declarations: [EmployeeDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(employeeModuleRoutes)
  ]
})
export class EmployeeModule { }
