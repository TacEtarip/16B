import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignedAgmarComponent } from './components/assigned-agmar/assigned-agmar.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: 'plan',
    component: MainComponent,
    children: [
      {
        path: 'assigned-agmar',
        component: AssignedAgmarComponent,
      },
      {
        path: '',
        redirectTo: 'assigned-agmar',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'plan',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
