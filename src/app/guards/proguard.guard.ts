import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProguardGuard implements CanActivate {
  
  constructor (
    private router: Router
  ) {}

  //For Admin
  canActivate(){
    if(localStorage.getItem("adminLogin"))
    { 
      return true;
    }
    else 
    {
      this.router.navigateByUrl('');
      return false;
    }  
  }
  
}

@Injectable({
  providedIn: 'root'
})
export class SomeGuard implements CanActivate {
  
  constructor (
    private router: Router
  ) {}

  //For User
  canActivate(){
    if(localStorage.getItem("userLogin"))
    { 
      return true;
    }
    else 
    {
      this.router.navigateByUrl('');
      return false;
    }  
  }

}
