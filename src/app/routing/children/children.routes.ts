import { Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { ChildrenGuard } from './children.guard';
import { Child3Guard } from './child3/child3.guard';



export const CHILDREN_ROUTES: Routes = [
    {path: 'child1', component: Child1Component},
    {path: 'child2', component: Child2Component},
    {path: 'child3', component: Child3Component, canActivate: [ChildrenGuard], canDeactivate: [Child3Guard]}
];

