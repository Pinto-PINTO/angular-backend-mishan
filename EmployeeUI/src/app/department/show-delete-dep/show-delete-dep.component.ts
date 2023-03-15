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
    this.ActivateAddEditDepComp=true;
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

// https://stackoverflow.com/questions/55275025/how-to-set-value-to-form-control-in-reactive-forms-in-angular#:~:text=Setting%20or%20Updating%20of%20Reactive,value%20of%20your%20Form%20Controls.
// https://www.google.com/search?q=patch+value+in+angular+reactive+forms&sxsrf=AJOqlzUCSLvNaVlOCG-n8HsHR9P-XxAjqQ%3A1678764185046&ei=megPZI6wApONmge8oYSABw&oq=patch+value+in+angular+re&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgUIABCABDIFCAAQhgMyBQgAEIYDOgoIABBHENYEELADOgYIABAWEB46CAgAEBYQHhAKSgQIQRgAUBNY6AJg9AdoAXABeACAAYMCiAHjA5IBBTEuMS4xmAEAoAEByAEIwAEB&sclient=gws-wiz-serp