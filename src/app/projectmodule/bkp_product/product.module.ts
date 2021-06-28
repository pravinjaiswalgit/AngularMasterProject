import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductlandingComponent } from './productlanding/productlanding.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RouterModule } from '@angular/router';
import { ProductlanginsubsectionComponent } from './productlanginsubsection/productlanginsubsection.component';


@NgModule({
  declarations: [
    ProductlandingComponent,
    ProductdetailsComponent,
    ProductlanginsubsectionComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    RouterModule
  ]
})
export class ProductModule { 
  constructor(){
    console.log("Lazy Module !!!")
  }
}
