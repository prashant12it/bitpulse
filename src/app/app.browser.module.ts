import {BrowserModule, Title, BrowserTransferStateModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {CommonService} from './common.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { OurServicesComponent } from './our-services/our-services.component';
import { WorkProcessComponent } from './work-process/work-process.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppModule } from './app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppModule,
    BrowserTransferStateModule,
    BrowserAnimationsModule
  ],
  providers: [CommonService,
    Title],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
