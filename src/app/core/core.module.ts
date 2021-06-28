import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './component/banner/banner.component';
import { CarouselComponent } from './component/carousel/carousel.component';



@NgModule({
  declarations: [
    BannerComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
