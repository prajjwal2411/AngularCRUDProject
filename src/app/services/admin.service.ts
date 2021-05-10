import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  addEmployee(employeeParameter)
  {
    let employees = [];
    if(localStorage.getItem("Employees"))
    {
      employees = JSON.parse(localStorage.getItem('Employees'));
      employees.push(employeeParameter);
    }
    else{
      employees = [employeeParameter];
    }
    localStorage.setItem("Employees", JSON.stringify(employees));
  }

  updateEmployee(index)
  {
    
  }

}
