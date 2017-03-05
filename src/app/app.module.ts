import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthHttp,AuthConfig,AUTH_PROVIDERS,provideAuth} from 'angular2-jwt/angular2-jwt'
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInService } from './sign-in/sign-in.service';
import { appRouting} from './app.routing';
import { AuthGaurd} from './sign-in/sign-in.auth.gaurd';
import { SignUpComponent } from './sign-up/sign-up.component';
import {ShowHideInput} from './sign-up/show-hide-input';
import {SignUpService} from './sign-up/sign-up.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ShowHideInput
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    appRouting
  ],
  providers: [
    SignInService,
    AuthGaurd,
    SignUpService    
    ],
  bootstrap: [AppComponent],
})
export class AppModule { }
