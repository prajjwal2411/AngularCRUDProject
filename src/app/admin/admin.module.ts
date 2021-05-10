import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ProguardGuard } from '../../guards/proguard.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../../services/admin.service';

const adminModuleRoutes: Routes = [
  {
    path: 'admindash',
    component: AdminDashboardComponent,
    canActivate: [ProguardGuard]
  }
]


@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(adminModuleRoutes)
  ],
  providers:[AdminService]
})
export class AdminModule { }
