import { Component } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {

  constructor(private service: DemoService){
   // service.currentQuote.subscribe(q=> this.quote=q)
  }

  quote = '';

  // function to update the quote in the service
  submitHandler(){    
   this.service.updateQuote(this.quote);
    this.quote="";
  }
}

  