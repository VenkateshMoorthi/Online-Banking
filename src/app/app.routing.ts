import { RouterModule, Router } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { NavbarComponent} from './navbar/navbar.component';
import {AuthGaurd} from './sign-in/sign-in.auth.gaurd';
import {SignUpComponent} from './sign-up/sign-up.component';
import {UserfrontComponent} from './navbar/userfront/userfront.component';
 

export const appRouting = RouterModule.forRoot([
    {path:'signin' ,component:SignInComponent},
    {path:'signup',component:SignUpComponent},
    {path:'',component:SignInComponent},
    {path:'home/:id',loadChildren:'app/navbar/navbar.module#NavbarModule'},
    {path:'**',redirectTo:'signin'}
]);