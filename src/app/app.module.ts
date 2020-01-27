import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
 import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DoctorsComponent } from './doctors/doctors.component';
import { UpdateComponent } from './update/update.component';
import { PatientComponent } from './patient/patient.component';
import { CreateComponent } from './create/create.component';
//  import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    DoctorsComponent,
    UpdateComponent,
    PatientComponent,
    CreateComponent
  ],
  imports: [
   FormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule

    // MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
