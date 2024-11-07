import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profiledetail',
  templateUrl: './profiledetail.component.html',
  styleUrl: './profiledetail.component.css'
})
export class ProfiledetailComponent {

  constructor(private route:ActivatedRoute) { }
  eid:number = 0;
  ngOnInit(): void {
    this.route.parent?.params.subscribe(param => this.eid = parseInt(param['id']))
  }

}
