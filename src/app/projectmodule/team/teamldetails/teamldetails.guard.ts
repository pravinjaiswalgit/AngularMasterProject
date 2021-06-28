import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, 
      RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TeamldetailsGuard implements CanActivate {

  constructor(private _router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean |
     UrlTree> | boolean | UrlTree {

      const AssociateId:number=Number(route.paramMap.get('AssociateId'));

      if(AssociateId< 1 || isNaN(AssociateId)){
        alert("Sorry, Invalid Associate Id")
        this._router.navigate(['/team']);
        return false;
      }  
    return true;
  }
}
