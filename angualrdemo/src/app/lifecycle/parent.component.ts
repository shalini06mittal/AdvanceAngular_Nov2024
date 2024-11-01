import { AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements
 OnInit, AfterViewInit{

  name:string ='Rebit'
  pMsg:string = 'Parent';
  show:boolean = true;
  product = {name:'Laptop'}
  

  @ViewChild('msginput')
  msgInput!:ElementRef;

  @ViewChild(ChildComponent)
  childComp!:ChildComponent;

  constructor(){
    console.log(`parent contructor ${this.name}`);
  }
  ngAfterViewInit(): void {
    console.log('after view init')
    console.log(this.msgInput)
  }
  ngOnInit(): void {
    console.log(`Parent on init`)
    
  }
  clickMe(){    
    this.childComp.doSomething();
  }
  


  
}
