import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, 
      RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductdetailsGuard implements CanActivate {

  constructor(private _router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean |
     UrlTree> | boolean | UrlTree {

      const ProductId:number=Number(route.paramMap.get('ProductId'));
      
      if(ProductId< 1 || isNaN(ProductId)){
        alert("Sorry, Invalid Product Id")
        this._router.navigate(['/product']);
        return false;
      }  
    return true;
  }
}
