import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { SETTINGS_ROUTES } from './settings.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SETTINGS_ROUTES)
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsModule { }
