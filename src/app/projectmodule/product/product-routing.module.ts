import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductdetailsGuard } from './productdetails/productdetails.guard';
import { ProductlandingComponent } from './productlanding/productlanding.component';

/*
const routes: Routes = [
  {path:'',redirectTo:'product',pathMatch:'full'},
  {path:'product/:id',component:ProductlandingComponent,
    children:[
      {path:'',redirectTo:'productdetails',pathMatch:'full'},
      {path:'productdetails',component:ProductdetailsComponent},
      {path:'**',redirectTo:'productdetails'}
    ],
    canActivate:[ProductdetailsGuard]
  }
];
*/


//ProductId
/* Working fine Before productlanginsubsection 
const routes: Routes = [
  {path:'',redirectTo:'product',pathMatch:'full'},
  
  {path:'product',component:ProductlandingComponent,
    children:[
      {path:'',redirectTo:'productdetails',pathMatch:'full'},
      {
        path:'productdetails/:ProductId',
        component:ProductdetailsComponent,
        canActivate:[ProductdetailsGuard]
      },
      {path:'**',redirectTo:'productdetails'}
    ]
  }
];
*/


/*

OK OK : 

const routes: Routes = [
  {path:'',redirectTo:'product',pathMatch:'full'},
  
  {path:'',component:ProductlandingComponent,
    children:[
      {path:'',redirectTo:'productdetails',pathMatch:'full'},
      {
        path:'productdetails/:ProductId',
        component:ProductdetailsComponent,
        canActivate:[ProductdetailsGuard]
      },
      {path:'**',redirectTo:'productdetails'}
    ]
  }
];


*/


const routes: Routes = [
  {path:'',redirectTo:'product',pathMatch:'full'},
  
  {path:'',component:ProductlandingComponent,
    children:[
      //{path:'',redirectTo:'productdetails',pathMatch:'full'},
      {
        path:'productdetails/:ProductId',
        component:ProductdetailsComponent,
        canActivate:[ProductdetailsGuard]
      },
      {path:'**',redirectTo:'productdetails'}
    ]
  }
];

@NgModule({
  //imports: [RouterModule.forChild(routes)],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
