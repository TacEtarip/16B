import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignedAgmarComponent } from './components/assigned-agmar/assigned-agmar.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: 'ordenesServicio',
    component: MainComponent,
    children: [
      {
        path: 'planoperagmar',
        component: AssignedAgmarComponent,
      },
      {
        path: 'visorasigagmar/:token/:refreshToken/:userId',
        component: AssignedAgmarComponent,
      },
      {
        path: '',
        redirectTo: 'visorasigagmar',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'ordenesServicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
