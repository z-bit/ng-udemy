import { Routes } from '@angular/router';
import { SignupComponent } from './unprotected/signup/signup.component';
import { SigninComponent } from './unprotected/signin/signin.component';
import { ProtectedComponent } from './protected/protected.component';
import { PageComponent } from './unprotected/page/page.component';

import {AuthGuard} from "app/common/services/auth.guard";





export const AUTH_ROUTES: Routes = [
  //{path: '', redirectTo: 'signup', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]},
  {path: 'unprotected', component: PageComponent}

];