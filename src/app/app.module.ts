import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutes } from './app.routes';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FistAppComponent } from './first-app/first-app.component';
import { FaOtherComponent } from './first-app/fa-other/fa-other.component';
import { AnotherComponent } from './first-app/fa-other/another.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DbCostumComponent } from './databinding/db-costum/db-costum.component';
import { DbEventComponent } from './databinding/db-event/db-event.component';
import { DbTwoWayComponent } from './databinding/db-two-way/db-two-way.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LcHooksComponent } from './lifecycle/lc-hooks/lc-hooks.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HighOnMouseoverDirective } from './directives/high-on-mouseover.directive';
import { UnlessDirective } from './directives/unless.directive';

import { ServicesComponent } from './services/services.component';
import { LogComponent } from './services/log/log.component';
import { DataComponent } from './services/data/data.component';
import { DatalogComponent } from './services/datalog/datalog.component';
import { CommunicationComponent } from './services/communication/communication.component';
import { Comp01Component } from './services/communication/comp01/comp01.component';
import { Comp02Component } from './services/communication/comp02/comp02.component';

import { LogService } from "./common/services/log.service";
import { DataService } from 'app/common/services/data.service';
import { DatalogService } from 'app/common/services/datalog.service';
import { CommunicationService } from 'app/common/services/communication.service';
import { FilereadComponent } from './fileread/fileread.component';
import { RoutingComponent } from './routing/routing.component';
import { SnapshotComponent } from './routing/snapshot/snapshot.component';
import { ObservableComponent } from './routing/observable/observable.component';
import { ChildrenComponent } from './routing/children/children.component';
import { DetailComponent } from './routing/detail/detail.component';
import { Child1Component } from './routing/children/child1/child1.component';
import { Child2Component } from './routing/children/child2/child2.component';
import { Child3Component } from './routing/children/child3/child3.component';
import { ChildrenGuard } from './routing/children/children.guard';
import { Child3Guard } from './routing/children/child3/child3.guard';
import { FormsComponent } from './forms/forms.component';
import { DataDrivenComponent } from './forms/data-driven/data-driven.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { FormbuilderComponent } from './forms/formbuilder/formbuilder.component';
import { PipesComponent } from './pipes/pipes.component';
import { DoublePipe } from './common/pipes/double.pipe';
import { BruttoPipe } from './common/pipes/brutto.pipe';
import { FilterPipe } from './common/pipes/filter.pipe';
import { ImpureFilterPipe } from './common/pipes/impure-filter.pipe';
import { HttpComponent } from './http/http.component';
import { HttpService } from 'app/common/services/http.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from 'app/common/services/auth.service';
import { AuthGuard } from 'app/common/services/auth.guard';


import { ProtectedComponent } from './auth/protected/protected.component';
import { SigninComponent } from './auth/unprotected/signin/signin.component';
import { SignupComponent } from './auth/unprotected/signup/signup.component';
import { PageComponent } from './auth/unprotected/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FistAppComponent,
    FaOtherComponent,
    AnotherComponent,
    DatabindingComponent,
    DbCostumComponent,
    DbEventComponent,
    DbTwoWayComponent,
    LifecycleComponent,
    LcHooksComponent,
    DirectivesComponent,
    HighlightDirective,
    HighOnMouseoverDirective,
    UnlessDirective,
    ServicesComponent,
    LogComponent,
    DataComponent,
    DatalogComponent,
    CommunicationComponent,
    Comp01Component,
    Comp02Component,
    FilereadComponent,
    RoutingComponent,
    SnapshotComponent,
    ObservableComponent,
    ChildrenComponent,
    DetailComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    FormsComponent,
    DataDrivenComponent,
    TemplateDrivenComponent,
    FormbuilderComponent,
    PipesComponent,
    DoublePipe,
    BruttoPipe,
    FilterPipe,
    ImpureFilterPipe,
    HttpComponent,
    AuthComponent,
    ProtectedComponent,
    SigninComponent,
    SignupComponent,
    PageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    
    AppRoutes
  ],
  providers: [
      LogService,
      DataService,
      DatalogService,
      CommunicationService,
      ChildrenGuard,
      Child3Guard,
      HttpService,
      AuthService,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
