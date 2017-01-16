import { RouterModule, Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FistAppComponent } from './first-app/first-app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DirectivesComponent } from './directives/directives.component';



const routes: Route[] = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'first', component: FistAppComponent},
  {path: 'databinding', component: DatabindingComponent},
  {path: 'lifecycle', component: LifecycleComponent},
  {path: 'directives', component: DirectivesComponent},

];

export const AppRoutes = RouterModule.forRoot(routes);
