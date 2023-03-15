import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

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
  }

  deleteClick(item:any) {
    if(confirm("Are you sure you want to delete ?")){
      this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
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
