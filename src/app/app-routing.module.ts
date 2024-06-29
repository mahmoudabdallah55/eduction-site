import { DocumentationComponent } from './pages/documentation/documentation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { JoinUsComponent } from './pages/join-us/join-us.component';
import { TrackComponent } from './pages/track/track.component';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { WeAreComponent } from './pages/we-are/we-are.component';
import { JionUSasCompanyComponent } from './pages/jion-usas-company/jion-usas-company.component';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { TeamComponent } from './pages/team/team.component';
import { UsagePolicyComponent } from './pages/usage-policy/usage-policy.component';
import { LicensesComponent } from './pages/licenses/licenses.component';

const routes: Routes = [
  {
      path:'',
      component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'joinUs',
    component:JoinUsComponent
  },
  {
    path:'trainingLines',
    component:TrackComponent
  },
  {
    path:'trainer',
    component:TrainerComponent
  },
  {
    path:'courses',
    component:CoursesComponent
  },
  {
    path:'weare',
    component:WeAreComponent
  },
  {
    path:'asCompany',
    component:JionUSasCompanyComponent
  },
  {
    path:'trainers',
    component:TrainerComponent
  },
  {
    path:'articles',
    component:ArticlesPageComponent
  },
  {
    path:'team',
    component:TeamComponent
  },

  {
    path:'licensses',
    component:LicensesComponent
  },
  {
    path:'usage-policy',
    component:UsagePolicyComponent
  },

  {
    path:'documention',
    component:DocumentationComponent
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing:false,
    scrollPositionRestoration:"top",
  })

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
