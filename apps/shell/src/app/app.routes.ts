import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: AppComponent,
        pathMatch: 'full'
    },
    // This is not working
    // {
    //     path: 'admin',
    //     loadChildren: () => import('admin/Module').then(m => m.SettingsModule)
    // },
    {
        path: 'admin',
        loadChildren: () =>
            loadRemoteModule({
                remoteEntry: 'http://localhost:4200/remoteEntry.js',
                remoteName: 'admin',
                exposedModule: './Module',
            }).then((m) => m.AdminPanelModule),
    },
    {
        path: '**',
        component: AppComponent
    }
];