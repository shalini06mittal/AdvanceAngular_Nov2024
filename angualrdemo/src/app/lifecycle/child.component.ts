import { AfterContentInit, Component, ContentChild, ContentChildren, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, DoCheck,
 OnChanges, OnDestroy, AfterContentInit{

  @Input()
  message:string = '';

  @Input()
  prod:any;
  
  // @ContentChildren("child")
  // eleRef!:any;
  // @ContentChild("p")
  // childRef!:ElementRef;

  @ContentChildren("p")
  list:any;

  ngAfterContentInit(): void {
    console.log('After content init')
    console.log(this.list);
    let i = 1;
    for(let ele of this.list)
    {
        console.log(ele)
        ele.nativeElement.innerText = 'Hello '+(i++);
    }
    // console.log(this.eleRef)
   // this.childRef.nativeElement.innerText = 'changed'
  }

  constructor(){
    console.log(`child contructor ${this.message}`);
  }
  
  ngOnDestroy(): void {
    console.log('child destroy')
  }
  ngDoCheck(): void {
    console.log(`do check child ${this.message} `)
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log(`on changes child ${this.message} `)
   console.log(changes)
   console.log(changes['message'].previousValue)
   console.log(changes['message'].currentValue)
   if(this.message !== 'Parent')
   this.message = this.message.substring(5);
  }
  ngOnInit(): void {
    console.log(`child on init ${this.message}`)
    if(this.message === 'Parent')
    {
      this.message = this.message.toUpperCase();
    }

  }
  doSomething(){
    alert('Child component called')
  }

}
