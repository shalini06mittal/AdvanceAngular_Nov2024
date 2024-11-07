import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpformComponent } from './empform/empform.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfiledetailComponent } from './profiledetail/profiledetail.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './service/auth.guard';
import { ReduxComponent } from './redux/redux.component';

const routes: Routes = [
  {path:'' ,redirectTo:'employees',pathMatch:'full'},
  {path:'employees',   component: EmployeelistComponent},
  {path:'footer' ,component:FooterComponent},
  {path:'add',   component:EmpformComponent },
  {path:'redux',   component:ReduxComponent },
  {path:'login', component:LoginComponent},
  {path:'employees/:id', component:ProfileComponent, canActivate:[authGuard],
    children:[
  {path:'detail', component:ProfiledetailComponent}
]
},
 {path:'**',component:PagenotfoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
 
}
