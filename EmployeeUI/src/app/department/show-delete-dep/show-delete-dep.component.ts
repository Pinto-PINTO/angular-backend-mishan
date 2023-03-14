import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-delete-dep',
  templateUrl: './show-delete-dep.component.html',
  styles: [
  ]
})
export class ShowDeleteDepComponent implements OnInit{

  constructor(private service:SharedService) { }

  // List to store all departments
  DepartmentList:any=[];

  // Varibales in Modal
  Title:any;
  ActivateAddEditDepComp:boolean=false;
  dep:any;


  ngOnInit(): void {
    this.refreshDepList();
  }

  openModal() {
    this.Title="Add Department";
    this.dep={
      DepartmentId:0,
      DepartmentName:''
    }
  }

  editClick(item:any) {
    this.Title="Edit Department";
    this.dep=item;
    this.ActivateAddEditDepComp=true;  
  }

  deleteClick(item:any) {
    if(confirm("Are you sure you want to delete ?")){
      this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
        this.refreshDepList();
        alert(data.toString());
      })
    }
  }


  closeModalClick() {
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }


  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList=data;
      // this.DepartmentListWithoutFilter=data;
    });
  }

}
