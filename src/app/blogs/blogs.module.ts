import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import {AppRoutingModule} from '../app-routing.module';
import { LightWeightDevelopmentComponent } from './light-weight-development/light-weight-development.component';
import { BlankBlogComponent } from './blank-blog/blank-blog.component';
import { Blog1Component } from './blog1/blog1.component';
import {FootTextModule} from '../foot-text/foot-text.module';

@NgModule({
  declarations: [BlogsListComponent, LightWeightDevelopmentComponent, BlankBlogComponent, Blog1Component],
  imports: [
    CommonModule,
    AppRoutingModule,

    FootTextModule
  ]
})
export class BlogsModule { }
