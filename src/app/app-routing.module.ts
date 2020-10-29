import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import {ParkingPlanComponent} from './parking-plan/parking-plan.component';
import {ServiceAdvantagesComponent} from './service-advantages/service-advantages.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {BusinessScopeComponent} from './parking-plan/business-scope/business-scope.component';
import {ProgrammeOverviewComponent} from './parking-plan/programme-overview/programme-overview.component';
import {CooperationCasesComponent} from './parking-plan/cooperation-cases/cooperation-cases.component';
import {CoreProductsComponent} from './parking-plan/core-products/core-products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/nav/home',
    pathMatch: 'full'
  },
  {
    path: 'nav',
    component: NavComponent,
    children: [
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
        path: 'parking-plan',
        component: ParkingPlanComponent,
        children: [
          {
            path: '',
            redirectTo: 'business-scope',
            pathMatch: 'full'
          },
          {
            path: 'business-scope',
            component: BusinessScopeComponent
          },
          {
            path: 'programme-overview',
            component: ProgrammeOverviewComponent
          },
          {
            path: 'cooperation-cases',
            component: CooperationCasesComponent
          },
          {
            path: 'core-products',
            component: CoreProductsComponent
          },
          {
            path: '**',
            component: BusinessScopeComponent
          }
        ]
      },
      {
        path: 'service-advantages',
        component: ServiceAdvantagesComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {path: '**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
