import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: AppComponent,
        pathMatch: 'full'
    },
    {
        path: 'admin',
        loadChildren: () => import('admin/Module').then(m => m.AppModule)
    },
    {
        path: '**',
        component: AppComponent
    }
];