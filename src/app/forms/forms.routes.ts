import { Routes } from '@angular/router';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';




export const FORMS_ROUTES = [
    { path: 'data-driven', component: DataDrivenComponent },
    { path: 'template-driven', component: TemplateDrivenComponent },
    { path: 'formbuilder', component: FormbuilderComponent},
];