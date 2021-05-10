import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
    ) { }
  
  //For User Login
  userLogin(empId, empEmail, empPassword)
  {
    if(empId == 123 && empEmail == "qwe" && empPassword == "qwe")
    {
      localStorage.setItem("userLogin", "userPass");
      return true;
    }
    this.router.navigateByUrl('');
    return false;
  }

  //For Admin Login
  adminLogin(adminEmail, adminPassword)
  {
    if(adminEmail = "admin" && adminPassword == "admin")
    {
      localStorage.setItem("adminLogin", "adminPass");
      return true;
    }
    this.router.navigateByUrl('');
    return false;
  }
}
