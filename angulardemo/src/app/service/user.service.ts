import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
   url:string ="http://localhost:8080/";
  constructor(private http:HttpClient) { }
   
  loginUser(email:string, password:string){
    let emp ={email, password}
      return this.http.post<any>(this.url+"login", emp);
  }

  isAuthencticated():boolean{
    return !!localStorage.getItem("token");
  }

 

  logout(){
    localStorage.removeItem("token");
  } 
}
