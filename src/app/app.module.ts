import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {CommonService} from './common.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {OurServicesComponent} from './our-services/our-services.component';
import {WorkProcessComponent} from './work-process/work-process.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CommonModule} from '@angular/common';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {NgtUniversalModule} from '@ng-toolkit/universal';
import {RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';
import {FootTextModule} from './foot-text/foot-text.module';
import {BlogsModule} from './blogs/blogs.module';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutUsComponent,
        OurServicesComponent,
        WorkProcessComponent,
        ContactUsComponent,
        PageNotFoundComponent,
        QuoteComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'bp'}),
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        CommonModule,
        TransferHttpCacheModule,
        NgtUniversalModule,
        RecaptchaModule.forRoot(),
        RecaptchaFormsModule,
        FootTextModule,
        BlogsModule
    ],
    providers: [CommonService,
        Title],
    bootstrap: [AppComponent]
})
export class AppModule {
}
