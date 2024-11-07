import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable, tap, toArray } from 'rxjs';
import { Employee } from '../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmphttpService {

  url:string = "http://localhost:8080/employees";
  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<any>
  {
    
    return this.http.get<Employee[]>(this.url)
    .pipe(mergeMap(v => v),
      map(r => {
        r.ename = r.ename.toUpperCase();
        return r;
      })
      ,toArray()
    );

    // .pipe(
    //   tap(resp=> console.log(resp)),  
    //   map(resp => resp.map((e: Employee) => {
    //     e.ename = e.ename.toUpperCase(); 
    //     return e;
    //   })));
  }
  getEmployeeById(eid:number):Observable<any>
  {
    return this.http.get<any>(this.url+'/'+eid);
  }
  addEmployee(employee:Employee):Observable<Employee>
  {
    return this.http.post<Employee>(this.url, employee);
  }
  // updateEmployee(employee:Employee):Observable<Employee>
  // {
  //   return this.http.put<Employee>(this.url+'/'+employee.eid, employee);
  // }
  deleteEmployee(eid:number){
    return this.http.delete(this.url+'/'+eid)
  }


}
