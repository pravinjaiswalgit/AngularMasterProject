import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './core/component/banner/banner.component';
import { CarouselComponent } from './core/component/carousel/carousel.component';
import { HomeComponent } from './projectmodule/home/home.component';
import { SolutionComponent } from './projectmodule/solution/solution.component';
import { ServicesComponent } from './projectmodule/services/services.component';
import { AboutComponent } from './projectmodule/about/about.component';
import { SupportComponent } from './projectmodule/support/support.component';
import { TeamlandingComponent } from './projectmodule/team/teamlanding/teamlanding.component';
import { TeamldetailsComponent } from './projectmodule/team/teamldetails/teamldetails.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamldetailsGuard } from './projectmodule/team/teamldetails/teamldetails.guard';
import { PageNotFoundComponent } from './sample/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    CarouselComponent,
    SolutionComponent,
    ServicesComponent,
    AboutComponent,
    SupportComponent,
    TeamlandingComponent,
    TeamldetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TeamldetailsGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
