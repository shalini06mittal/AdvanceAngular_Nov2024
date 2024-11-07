import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/Employee';
import { EmphttpService } from '../service/emphttp.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  employee:Employee;
  constructor(private route:ActivatedRoute, private es :EmphttpService,
      private router:Router) {
      this.employee = {eid:0,ename:'',phone:'',email:'',password:"",address:{country:''}}
   }
  
  // localhost:4200/employees/1
    ngOnInit(): void {
      this.route.params.subscribe(data => {
        console.log(data['id'])
        this.employee.eid = data['id']
        this.es.getEmployeeById(data['id'])
        .subscribe(resp => {
          this.employee = resp.employee;
          console.log(resp)
      });
      })
    }
  
    back(eid:number)
  {
      // this add ; in the url
      //this.router.navigate(['../',{id:eid}],{relativeTo:this.route})

      // to pass query parameter with ? syntax
      this.router.navigate(['../'],{relativeTo:this.route, queryParams:{id:eid}})
  }
  displayAddress()
  {
    this.router.navigate(['detail'],{relativeTo:this.route})
  }


}
