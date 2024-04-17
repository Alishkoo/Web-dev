import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VacanciesComponent } from './vacancies/vacancies.component';

export const routes: Routes = [
    { 'path': '', redirectTo: 'companies', pathMatch: 'full' },
    { 'path': 'companies', component: AppComponent },
    { 'path': 'vacancies/:id', component: VacanciesComponent },
];
