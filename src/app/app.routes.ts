import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full'
    },
    {
        path: 'portfolio',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'contact',
        component: ContactsComponent,
        pathMatch: 'full'
    },
    {
        path: 'blog',
        component: BlogComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
