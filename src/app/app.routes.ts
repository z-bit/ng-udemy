import { RouterModule, Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FistAppComponent } from './first-app/first-app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DirectivesComponent } from './directives/directives.component';
import { ServicesComponent } from './services/services.component';
import { LogComponent } from './services/log/log.component';
import { DataComponent } from './services/data/data.component';
import { DatalogComponent } from './services/datalog/datalog.component';
import { CommunicationComponent } from './services/communication/communication.component';







const routes: Route[] = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'first', component: FistAppComponent},
  {path: 'databinding', component: DatabindingComponent},
  {path: 'lifecycle', component: LifecycleComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'services', component: ServicesComponent, children: [
      {path: 'log', component: LogComponent},
      {path: 'data', component: DataComponent},
      {path: 'datalog', component: DatalogComponent},
      {path: 'communication', component: CommunicationComponent}
  ]},

];

export const AppRoutes = RouterModule.forRoot(routes);
