import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tutorial } from '../model/tutorial.model';
import * as TutorialActions from '../actions/tutorial.action'
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {

  tutorials : Observable<Tutorial[]>;

  constructor(private store : Store<any>)
  {
    // "tutorial" is coming from the app.module.ts
    this.tutorials = store.select("tutorial")
  }
  delTutorial(id:any){
    console.log(id)
    //alert("Id "+id)
    this.store.dispatch(
      new TutorialActions.RemoveTutorialAction(parseInt(id)))
  }

}
