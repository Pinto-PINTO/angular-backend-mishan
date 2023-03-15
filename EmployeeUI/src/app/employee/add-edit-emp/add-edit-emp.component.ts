import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

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

  @Input() emp:any;
  EmployeeId:any;
  EmployeeName:any;
  Department:any;
  DateOfJoining:any;
  PhotoFileName:any;
  
  ngOnInit(): void {
    this.EmployeeId=this.emp.EmployeeId;
    this.EmployeeName=this.emp.EmployeeName;
    this.Department=this.emp.Department;
    this.DateOfJoining=this.emp.DateOfJoining;
    this.PhotoFileName=this.emp.PhotoFileName;
    this.refreshEmpList();
  }

  addEmployee(){
    var val = {EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      DateOfJoining:this.DateOfJoining,
      PhotoFileName:this.PhotoFileName,
    };
    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val = {EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      DateOfJoining:this.DateOfJoining,
      PhotoFileName:this.PhotoFileName,
    };
    this.service.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
    });
  }

}
