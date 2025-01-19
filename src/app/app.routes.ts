import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { OrScheduleComponent } from './or/or-schedule/or-schedule.component';
import { OrResourcesComponent } from './or/or-resources/or-resources.component';
import { OrStatisticsComponent } from './or/or-statistics/or-statistics.component';
import { CssdInventoryComponent } from './cssd/cssd-inventory/cssd-inventory.component';
import { CssdProcessesComponent } from './cssd/cssd-processes/cssd-processes.component';
import { CssdReportsComponent } from './cssd/cssd-reports/cssd-reports.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { ControllingComponent } from './controlling/controlling.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'user', component: UserComponent},
    {path: 'user/:id', component: UserDetailComponent},
    {path: 'patients/:id', component: PatientDetailComponent},
    {path: 'or/schedule', component: OrScheduleComponent},
    {path: 'or/resources', component: OrResourcesComponent},
    {path: 'or/statistics', component: OrStatisticsComponent},
    {path: 'cssd/inventory', component: CssdInventoryComponent},
    {path: 'cssd/processes', component: CssdProcessesComponent},
    {path: 'cssd/reports', component: CssdReportsComponent},
    {path: 'controlling', component: ControllingComponent}
];
