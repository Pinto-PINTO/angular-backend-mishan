import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styles: [
  ]
})
export class AddEditDepComponent implements OnInit{

  constructor(private service:SharedService) {}

  // List to store all departments
  DepartmentList:any=[];

  @Input() dep:any;
  DepartmentId:any;
  DepartmentName:any;
  
  ngOnInit(): void {
    this.DepartmentId=this.dep.DepartmentId;
    this.DepartmentName=this.dep.DepartmentName;
    this.refreshDepList();
  }

  addDepartment(){
    var val = {DepartmentId:this.DepartmentId,
                DepartmentName:this.DepartmentName};
    this.service.addDepartment(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName};
    this.service.updateDepartment(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList=data;
    });
  }

}
