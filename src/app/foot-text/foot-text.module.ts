import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootTextComponent } from './foot-text/foot-text.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {ContactUsComponent} from '../contact-us/contact-us.component';
import {WorkProcessComponent} from '../work-process/work-process.component';
import {OurServicesComponent} from '../our-services/our-services.component';
import {AboutUsComponent} from '../about-us/about-us.component';
import {HomeComponent} from '../home/home.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'hybrid-app-development-company', component: AboutUsComponent},
  {path: 'best-web-development-company', component: OurServicesComponent},
  {path: 'web-development-testing-company', component: WorkProcessComponent},
  {path: 'contact-us', component: ContactUsComponent},
  { path: '404', component: PageNotFoundComponent },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];
@NgModule({
  exports: [FootTextComponent, RouterModule],
  declarations: [FootTextComponent],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class FootTextModule { }
