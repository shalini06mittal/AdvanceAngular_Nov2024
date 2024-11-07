import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { registerLocaleData } from '@angular/common'; 
import localeFr from '@angular/common/locales/fr';
import { PipesComponent } from './pipes/pipes.component';
import { PowerPipe } from './pipes/power.pipe';
import { EmpformComponent } from './empform/empform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpreactiveformComponent } from './empreactiveform/empreactiveform.component';
import { ServiceComponent } from './service/service.component';
import { QuoteComponent } from './service/quote.component';
import {  HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfiledetailComponent } from './profiledetail/profiledetail.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TokenService } from './service/token.service';
import { ReduxComponent } from './redux/redux.component';
import { CreateComponent } from './redux/create/create.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { tutorialReducer } from './redux/reducer/tutorial.reducer';
import { ReadComponent } from './redux/read/read.component';

// the second parameter 'fr' is optional 
registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, EmployeelistComponent, HeaderComponent, FooterComponent, PipesComponent, PowerPipe, EmpformComponent,
    EmpreactiveformComponent,
    ServiceComponent,
    QuoteComponent,
    PagenotfoundComponent,
    ProfileComponent,
    ProfiledetailComponent,
    LoginComponent,
    ReduxComponent, CreateComponent, ReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule ,  MatButtonModule, MatCardModule,MatInputModule, 
    StoreModule.forRoot({tutorial: tutorialReducer} as ActionReducerMap<any, any>)
  ],
  providers: [provideHttpClient(withInterceptorsFromDi()), provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
