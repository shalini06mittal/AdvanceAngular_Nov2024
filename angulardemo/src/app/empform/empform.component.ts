import { Component } from '@angular/core';
import { EmphttpService } from '../service/emphttp.service';

@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrl: './empform.component.css'
})
export class EmpformComponent {
  emp ={ename:''};

  constructor(private service : EmphttpService){}
  saveEmployee(emp:any)
  {
         console.log(emp.value)
        this.service.addEmployee(emp.value).subscribe(resp => console.log(resp));
    };

}
