import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const adminSettingsModule = () => 
    loadRemoteModule({
        type: 'module',
        remoteEntry: '/admin/remoteEntry.js',
        exposedModule: './Module'
    }).then((m) => m.SettingsModule)

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    // This is not working
    // {
    //     path: 'admin',
    //     loadChildren: () => adminSettingsModule()
    // },
    // {
    //     path: 'admin',
    //     loadChildren: () => import('admin/Module').then(m => m.SettingsModule)
    // },
    {
        path: 'admin',
        loadChildren: () =>
            loadRemoteModule({
                remoteEntry: '/admin/remoteEntry.js',
                remoteName: 'admin',
                exposedModule: './Module',
            }).then((m) => m.AdminPanelModule),
    },
];