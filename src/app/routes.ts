import { Routes } from '@angular/router';
import { SectionHomeComponent } from '../app/sections/section-home/section-home.component';
import { SectionAreasComponent } from './sections/section-areas/section-areas.component';
import { SectionLoginComponent } from './sections/section-login/section-login.component';
import { SectionChangelogComponent } from './sections/section-changelog/section-changelog.component';
import { AuthGuard } from './helpers/auth.guard';

export const appRoutes: Routes = [
  { path: '', component: SectionHomeComponent, canActivate: [AuthGuard]},
  { path: 'home', component: SectionHomeComponent },
  { path: 'areas', component: SectionAreasComponent },
  { path: 'login', component: SectionLoginComponent },
  { path: 'changelog', component: SectionChangelogComponent }
];
