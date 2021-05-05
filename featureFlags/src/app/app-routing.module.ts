import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ThirdFeatureComponent} from './third-feature/third-feature.component';
import {FirstFeatureComponent} from './first-feature/first-feature.component';
import {SecondFeatureComponent} from './second-feature/second-feature.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'first-feature',
    component: FirstFeatureComponent
  },
  {
    path: 'second-feature',
    component: SecondFeatureComponent
  },
  {
    path: 'third-feature',
    component: ThirdFeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
