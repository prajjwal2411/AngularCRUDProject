import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user-admin',
  templateUrl: './login-user-admin.component.html',
  styleUrls: ['./login-user-admin.component.scss']
})
export class LoginUserAdminComponent implements OnInit {

  public adminLoginForm: FormGroup;
  public isSubmitted: boolean = false;

  constructor(private router: Router, private authService: AuthService, public formBuilder: FormBuilder) 
  {
    this.adminLoginForm = this.formBuilder.group({
      adminEmail: ['', [Validators.required, Validators.email]],
      adminPassword: ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  get returnFormControl(){
    return this.adminLoginForm.controls;
  }

  //For User Login
  public employeeID: any;
  public employeeEmail: any;
  public employeePassword: any;

  userLogin()
  {
    if(this.isSubmitted){
      if(this.authService.userLogin(this.employeeID, this.employeeEmail, this.employeePassword))
      {
        this.router.navigateByUrl('employdash');
      }
    }
  }

  onAdminSubmit()
  {
    this.isSubmitted = true;
    if(this.authService.adminLogin(this.adminLoginForm.value.adminEmail, this.adminLoginForm.value.adminPassword))
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
