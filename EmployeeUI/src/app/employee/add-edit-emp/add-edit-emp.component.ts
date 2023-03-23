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

  empString:any;
  

  // Data passing from parent to child
  // @Input() EmployeeDataFromParent:any


  employeeForm = new FormGroup({
    EmployeeName: new FormControl(''),
    Department: new FormControl(''),
    DateOfJoining: new FormControl(''),
    PhotoFileName: new FormControl('')
  })

   
  ngOnInit(): void {
    this.service.getEmpList()
    this.refreshEmpList();
    console.log("Child Emp: ", this.emp)
    this.empString = JSON.stringify(this.emp);
    console.log("Emp Name: ", JSON.stringify(this.emp.EmployeeName))
    this.empString = JSON.stringify(this.emp);

    // this.employeeForm.patchValue({
    //   EmployeeName: this.emp.EmployeeName,
    //   Department: this.emp.Department,
    //   DateOfJoining: this.emp.DateOfJoining,
    //   PhotoFileName: this.emp.PhotoFileName,
    // });

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
    // console.log("THis runs")
    // this.service.updateEmployee(this.employeeForm.value).subscribe(res=>{
    // console.log(this.employeeForm.value)
    // alert(res.toString());
    // });
    console.log("Hey")
    this.service.updateEmployee(this.employeeForm.value).subscribe(res => {
      this.EmployeeList = res;
      // this.employeeForm.patchValue({
      //   EmployeeName: this.EmployeeList.EmployeeName,
      //   Department: this.EmployeeList.Department,
      //   DateOfJoining: this.EmployeeList.DateOfJoining,
      //   PhotoFileName: this.EmployeeList.PhotoFileName,

      // });
      // this.employeeForm.patchValue({
      //   EmployeeName: "Bob"
      // });
    });
    console.log("Child Emp: ",this.emp)
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
    });
  }

}
