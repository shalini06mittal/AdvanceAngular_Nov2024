import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor{

  constructor(private us:UserService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('interceptor')
    let reqclone = req;
    if(this.us.isAuthencticated()){
      console.log('yes')
      let token = localStorage.getItem('token')!
      console.log(token)
       reqclone = req.clone({
        headers: req.headers.set("Authorization", token)
      })
    }
    return next.handle(reqclone);
  }
}

// export function jwtInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

//   const us:UserService = inject(UserService);
  
//     console.log('interceptor')
//     let reqclone = req;
//     if(us.isAuthencticated()){
//       console.log('yes')
//       let token = localStorage.getItem('token')!
//       console.log(token)
//        reqclone = req.clone({
//         headers: req.headers.set("Authorization", token)
//       })
//     }
//     return next(reqclone);
  
// }