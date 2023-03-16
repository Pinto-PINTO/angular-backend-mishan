import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styles: [
  ]
})
export class AddEditEmpComponent implements OnInit{

  constructor(private service:SharedService) {}

  // List to store all departments
  EmployeeList:any=[];
  employee: any = {};

  @Input() emp:any;
  EmployeeId:any;
  EmployeeName:any;
  Department:any;
  DateOfJoining:any;
  PhotoFileName:any;


  employeeForm = new FormGroup({
    EmployeeName: new FormControl(''),
    Department: new FormControl(''),
    DateOfJoining: new FormControl(''),
    PhotoFileName: new FormControl('')
  })
  
  ngOnInit(): void {
    this.service.getEmpList()
    this.refreshEmpList();
  }

  addEmployee(){
    
    this.service.addEmployee(this.employeeForm.value).subscribe(res=>{
      console.log(this.employeeForm.value)
      alert(res.toString());
    });
  }

  updateEmployee(){
    // var val = {EmployeeId:this.EmployeeId,
    //   EmployeeName:this.EmployeeName,
    //   Department:this.Department,
    //   DateOfJoining:this.DateOfJoining,
    //   PhotoFileName:this.PhotoFileName,
    // };
    console.log("THis runs")
    this.service.updateEmployee(this.employeeForm.value).subscribe(res=>{
    console.log(this.employeeForm.value)
    alert(res.toString());
    });
    // this.service.updateEmployee(this.employeeForm.value).subscribe(res => {
    //   this.EmployeeList = res;
    //   this.employeeForm.patchValue({
    //     EmployeeName: this.EmployeeList.EmployeeName,
    //     Department: this.EmployeeList.Department
    //   });
    // });
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
    });
  }

}
