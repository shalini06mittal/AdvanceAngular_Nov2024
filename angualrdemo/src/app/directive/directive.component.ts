import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

  itemname:string='matar-paneer';
  constructor(){
    console.log('dir contructor')
  }
}
