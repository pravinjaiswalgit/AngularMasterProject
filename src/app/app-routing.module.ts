import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './projectmodule/about/about.component';
import { HomeComponent } from './projectmodule/home/home.component';
import { ProductdetailsComponent } from './projectmodule/product/productdetails/productdetails.component';
import { ProductlandingComponent } from './projectmodule/product/productlanding/productlanding.component';
import { ServicesComponent } from './projectmodule/services/services.component';
import { SolutionComponent } from './projectmodule/solution/solution.component';
import { SupportComponent } from './projectmodule/support/support.component';
import { TeamlandingComponent } from './projectmodule/team/teamlanding/teamlanding.component';
import { TeamldetailsComponent } from './projectmodule/team/teamldetails/teamldetails.component';
import { TeamldetailsGuard } from './projectmodule/team/teamldetails/teamldetails.guard';

//loadChildren:'./product/productdetails/product.module#ProductModule'

const approutes: Routes = [
    {path:'home',component:HomeComponent},
    /*
    {
      path:'product',
      loadChildren: () => import('./projectmodule/product/product.module').then(m => m.ProductModule) 
    },
    */
    
    {
        path:'product',
        loadChildren: () => import('./projectmodule/product/product.module').then(m => m.ProductModule),
        data: { preload: true }
    },
    
    {path:'solution',component:SolutionComponent},
    {path:'services',component:ServicesComponent},
    {path:'about',component:AboutComponent},
    {path:'support',component:SupportComponent},

    {path:'team',component:TeamlandingComponent},
    {
      path:'team/:AssociateId',
      component:TeamldetailsComponent,
      canActivate:[TeamldetailsGuard]
    },
    {path:'',redirectTo:'home',pathMatch:'prefix'},
    {path:'**',redirectTo:'home',pathMatch:'prefix'},
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
