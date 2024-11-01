import { Component } from '@angular/core';
import { Employee } from '../model/Employee';
import { employees } from '../model/data';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  eList:Employee[] = employees;

  constructor(){
    console.log('emp list constructor');
  }

  onDeleteEvent(id:any){
    console.log(`${id} passed to list`)
    this.eList = 
    this.eList.filter(emp => emp.eid!== id);
  }
  onEditEvent(id:any){
    console.log(`${id} passed to list for edit`)
  }
}
