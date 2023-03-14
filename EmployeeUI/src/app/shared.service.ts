import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="https://localhost:44398/api";
  readonly PhotoUrl = "https://localhost:44398/Photos/";

  constructor(private http:HttpClient) { }

  // 1. Get All Departments
  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  // 2. Create Department
  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }

  // 3. Update Department
  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }

  // 4. Delete Department
  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }

  // 5. Get All Employees
  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  // 6. Insert Employee
  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }

  // 7. Update Employee
  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }

  // 8. Delete Employee
  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  }

  // 9. Insert Employee Photo
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  }

  // 10. Get all Department Names
  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }


}
