import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
  preserveWhitespaces: true,
})
export class PipesComponent {
  company = 'acme corporation';
  scheduledOn = new Date();
  x: Promise<string> | null = null;
  constructor(@Inject(LOCALE_ID) public locale: string){}

  ngOnInit(){
   setTimeout(() => {
      this.x = Promise.reject("hello world");//.then(msg => this.x = msg)
      
    }, 3000);
  }
}
