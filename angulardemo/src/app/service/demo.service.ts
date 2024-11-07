import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  message:string ;
  // declare and initialize the quote property
  // which will be a BehaviorSubject
  qoute = new BehaviorSubject("Hello world");

  // expose the BehaviorSubject as an Observable
 // currentQuote = this.qoute.asObservable();
  
  // function to update the value of the BehaviorSubject
  updateQuote(newQuote: string){
    console.log('new quote', newQuote)
    
    this.qoute.next(newQuote);
  }

  constructor() { 
      this.message = 'from service';
      console.log('demo service')
      console.log(this.qoute.getValue());
  }
  setMessage(msg:string){
    console.log('service set message ', msg)
        this.message = msg
  }
 
  
}
