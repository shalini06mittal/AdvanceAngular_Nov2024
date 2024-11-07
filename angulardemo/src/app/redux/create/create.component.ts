import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Tutorial } from '../model/tutorial.model';

import * as TutorailActions from '../actions/tutorial.action';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private store:Store<any>){


  }

  addTutorial(id:any, name:string, url:string){
    this.store.dispatch(new TutorailActions.AddTutorialAction({id:parseInt(id),name:name, url:url}))
  }

}
