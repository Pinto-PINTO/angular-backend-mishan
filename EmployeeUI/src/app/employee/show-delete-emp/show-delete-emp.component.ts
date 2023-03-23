import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-show-delete-emp',
  templateUrl: './show-delete-emp.component.html',
  styles: [
  ]
})
export class ShowDeleteEmpComponent implements OnInit{

  constructor(private service:SharedService) { }

  // List to store all employees
  EmployeeList:any=[];

  // Varibales in Modal
  Title:any;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;

  // Variable used for data passing
  // currentEmployeeRecord: any


  employeeForm = new FormGroup({
    EmployeeName: new FormControl(''),
    Department: new FormControl(''),
    DateOfJoining: new FormControl(''),
    PhotoFileName: new FormControl('')
  })

  ngOnInit(): void {
    this.refreshEmpList();
  }

  openModal() {
    this.Title="Add Employee";
    this.emp={
      EmployeeId:0,
      EmployeeName:'',
      Department:'',
      DateOfJoining:'',
      PhotoFileName:'',
    }
    this.ActivateAddEditEmpComp=true;
  }

  editClick(item:any) {
    this.Title="Edit Employee";
    this.emp=item;
    this.ActivateAddEditEmpComp=true;  
    this.employeeForm.controls.EmployeeName.setValue('abc');
    console.log("Emp: ", this.emp);

    this.employeeForm.patchValue({
      EmployeeName: "Bob"
    });
  }

  deleteClick(item:any) {
    if(confirm("Are you sure you want to delete ?")){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        this.refreshEmpList();
        alert(data.toString());
      })
    }
  }


  closeModalClick() {
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }


  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
    });
  }
}
