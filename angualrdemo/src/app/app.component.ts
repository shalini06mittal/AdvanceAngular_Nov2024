import { Component } from '@angular/core';
//https://codebunk.com/b/3251100687019/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'angualrdemo';
  imageurl = 'https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg';

  blue='blue';
  pink='pink';
  isEnabled=true;
  classes ='red yellow';
  html="<div>This is div</div>";
  script ="alert('DANGER!!')";
  
  clicked(msg:string)
  {
    alert('hey welcome')
    this.title = msg;
    this.classes='green';
  }
  greet(){
    return "Good morning!!";
  }
}
