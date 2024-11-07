import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public loginValid = true;
  public email = 'j@j.com';
  public password = '1234';


  constructor(private userserv : UserService, private router:Router) { }


  /**
   * when user click on login button, take to books dashboard for vaild credentials
   * or display an error message for invalid credentials and remain on login page
   */
  public onSubmit(): void {
    this.loginValid = true;
    console.log('login',this.email, this.password)
    this.userserv.loginUser(this.email, this.password)
    .subscribe({
      next: resp => {
            console.log(resp);
            if(resp !== undefined )
              {
                localStorage.setItem("token",resp.jwtToken);
                this.router.navigate(['']);
              }
      },
      error: err => this.loginValid = false
    });
  }

}
 // if(resp[0] !== undefined && resp[0].username === this.username && resp[0].password === this.password)
      // {
      //   localStorage.setItem("username",this.username);
      //   this.router.navigate(['/employees']);
      // }
      // else{
      //   this.loginValid = false;
      // }
// }
