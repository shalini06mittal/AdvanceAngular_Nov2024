import { Component, Inject, LOCALE_ID } from '@angular/core';
import { DemoService } from './service/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angulardemo';
 
  show:boolean = false;

  clicked(){
    this.show = ! this.show;
  }
  constructor(public service:DemoService){}
}
