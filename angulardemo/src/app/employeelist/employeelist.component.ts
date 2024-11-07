import { Component } from '@angular/core';
import { Employee } from '../model/Employee';
import { employees } from '../model/data';
import { EmphttpService } from '../service/emphttp.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
 
  eList:Observable<Employee[]> = new Observable<Employee[]>();
  errorMsg:string = '';
  delId: number = 0;

  selid:any = 0;

  ngOnInit(): void {
      //this.route.params.subscribe(params => this.selid = params.id)
      
      this.route.queryParams.subscribe(params => this.selid = parseInt(params['id']))
          
      this.eList = this.empservice.getAllEmployees();
    }

    isSelected(empid:any):boolean{
        console.log(empid === this.selid)
        return empid === this.selid;
      }

  // ngOnInit(): void {
  //   this.eList = this.empservice.getAllEmployees()
  //   // .subscribe(resp => {
  //   //  console.log('fetched employees')
  //   //  console.log(resp);
  //   //   this.eList = resp;
  //   // })
  // }
  constructor(private empservice:EmphttpService, private route:ActivatedRoute, 
    private router:Router
){
    console.log('emp list constructor');
  }
 

  viewProfile(id:number)
  {

    //this.router.navigate(['employees', id])

      // Above is absolute routing. If the /employees url changes this code will break. Hence uncomment below line and comment above line to add relative route
      this.router.navigate([id], {relativeTo:this.route})
  }

  onDeleteEvent(id:any){
    console.log(`${id} passed to list`)
    // this.eList = 
    // this.eList.filter(emp => emp.eid!== id);
    this.empservice.deleteEmployee(id).subscribe({
    next:   resp => console.log(resp),
    error: err => {
      console.log(err)
      this.delId = id;
      this.errorMsg = 'Cannot delete'
    }
  })
  }
  onEditEvent(id:any){
    console.log(`${id} passed to list for edit`)
  }
}
