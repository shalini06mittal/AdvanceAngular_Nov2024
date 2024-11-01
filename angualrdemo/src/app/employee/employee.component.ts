import { Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  @Input({
    alias:"data"})
  emp:Employee | null;

  @Input({transform:(value:string)=> 
    value.toUpperCase()})
  company:string='';

  @Output()
  idEvent:EventEmitter<any> = new EventEmitter();

  
  constructor(){
     this.emp = null;

      // this.emp = {eid:0, ename:'', phone:'', email:'', password:'',
      //   address:{country:""}}
      console.log(`employee constructor ${this.emp}`);
    }
    deleteEmployee(){
      console.log(this.emp?.eid)
      this.idEvent.emit(this.emp?.eid);
      
    }
}
