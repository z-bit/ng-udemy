import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
