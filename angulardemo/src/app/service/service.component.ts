import { Component, inject } from '@angular/core';
import { DemoService } from './demo.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
  //  providers:[DemoService]
})
export class ServiceComponent {

   service:DemoService = inject(DemoService);
  title!:string ;
  constructor(){}//public service:DemoService){
  //   this.title = service.message;
  // }

  currentQuote: string = '';

  ngOnInit(): void {
    // Subscribe the currentQuote property of quote service to get real time value
    this.service.qoute
    .pipe(debounceTime(1000))
    .subscribe(
      // update the component's property
      quote => {
        if(quote.endsWith('!'))
        this.currentQuote = quote
      });
  }
  changeTitle(){
    this.service.setMessage(this.title);
  }
  
}
