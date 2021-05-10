import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})

export class AdminDashboardComponent implements OnInit {

  public addUserForm: FormGroup;
  public show: boolean = true;
  public employee: any = {};
  public globalIndex: any;
  
  constructor(public formBuilder: FormBuilder, private adminService: AdminService) 
  { 
    this.addUserForm = this.formBuilder.group
    ({
      empId: ['', Validators.required],
      empName: ['', Validators.required],
      empDepartment: ['', Validators.required],
      empEmail: ['', [Validators.required]],
      empPwd: ['', Validators.required] 
    }) 
  }

  ngOnInit(): void {
  }

  public toDisplayData: any = JSON.parse(localStorage.getItem("Employees"));


  onSubmit()
  {
    //console.log(this.addUserForm.value, "value");
    if(this.addUserForm.valid){
    this.employee = Object.assign(this.employee, this.addUserForm.value);
    this.adminService.addEmployee(this.employee);
    this.addUserForm.reset();}
  }

  removeItem(index)
  {
    this.toDisplayData.splice(index, 1)
  }
  
  editItem(index)
  {
    this.addUserForm.setValue(this.toDisplayData[index]);
    //console.log(JSON.parse(localStorage.getItem("Employees"))[index])
    this.show = !(this.show);
    this.globalIndex = index
  }

  updateEmployee()
  {
    const indexValue = JSON.parse(localStorage.getItem("Employees"))[this.globalIndex];
    //UPDATE NOT WORKING.
  }
}
