import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {WorkProcessComponent} from './work-process/work-process.component';
import {OurServicesComponent} from './our-services/our-services.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BlogsListComponent} from './blogs/blogs-list/blogs-list.component';
import {LightWeightDevelopmentComponent} from './blogs/light-weight-development/light-weight-development.component';
import {BlankBlogComponent} from './blogs/blank-blog/blank-blog.component';
import {Blog1Component} from './blogs/blog1/blog1.component';
import {QuoteComponent} from './quote/quote.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'hybrid-app-development-company', component: AboutUsComponent},
    {path: 'best-web-development-company', component: OurServicesComponent},
    {path: 'web-development-testing-company', component: WorkProcessComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'request-quote', component: QuoteComponent},
    {
        path:  'blogs',
        component:  BlankBlogComponent,
        children: [
            {
                path:  '',
                component:  BlogsListComponent
            },
            {
                path:  'best-web-development-company',
                component:  Blog1Component
            },
            {
                path:  'light-weight-websites',
                component:  LightWeightDevelopmentComponent
            }
        ]
    },
    { path: '404', component: PageNotFoundComponent },
    {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
