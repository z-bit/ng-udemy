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
import { RoutingComponent } from './routing/routing.component';
import { SnapshotComponent } from './routing/snapshot/snapshot.component';
import { ObservableComponent } from './routing/observable/observable.component';
import { ChildrenComponent } from './routing/children/children.component';
import { DetailComponent } from './routing/detail/detail.component';

import { CHILDREN_ROUTES } from './routing/children/children.routes';


import { FilereadComponent } from './fileread/fileread.component';

const routes: Route[] = [
//{path: '', redirectTo: 'home', pathMatch: 'full'},
//this adds a /home if you call the url and the server won't find it.
//better:
  {path: '', component: HomeComponent},
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
  {path: 'routing', component: RoutingComponent, children: [
      {path: 'snapshot/:id', component: SnapshotComponent},
      {path: 'observable/:id', component: ObservableComponent},
      {path: 'detail', component: DetailComponent},
      {path: 'children', component: ChildrenComponent},
      {path: 'children', component: ChildrenComponent, children: CHILDREN_ROUTES}
  ]},
  {path: 'fileread', component: FilereadComponent},

  {path: '**', redirectTo:'home', pathMatch: 'full'}
];

export const AppRoutes = RouterModule.forRoot(routes);
