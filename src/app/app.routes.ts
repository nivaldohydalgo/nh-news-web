import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './shareds/page-not-found/page-not-found.component';
import { InfoComponent } from './pages/info/info.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'info', component: InfoComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
