import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user-admin',
  templateUrl: './login-user-admin.component.html',
  styleUrls: ['./login-user-admin.component.scss']
})
export class LoginUserAdminComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  //For User Login
  public employeeID: any;
  public employeeEmail: any;
  public employeePassword: any;

  userLogin()
  {
    if(this.authService.userLogin(this.employeeID, this.employeeEmail, this.employeePassword))
    {
      this.router.navigateByUrl('employdash');
    }
  }

  //For User Login
  public adminEmail: any;
  public adminPassword: any;

  adminLogin()
  {
    if(this.authService.adminLogin(this.adminEmail, this.adminPassword))
    {
      this.router.navigateByUrl('admindash');
    }
  }

  //To Change Form
  public show: boolean = true;
  public person: string = "Admin";

  toToggle()
  {
    this.show = !(this.show);

    if(this.show)
    {
      this.person = "Admin";
    }
    else
    {
      this.person = "User";
    }
  }

}
