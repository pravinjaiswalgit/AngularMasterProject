import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { tap , catchError } from 'rxjs/operators'
import { ITeam } from './iteam';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  
  team:ITeam[]= [];
  url:string='assets/api/team/team.json'

  constructor(private _httpClient:HttpClient){
  }

  getAllTeamMember():Observable<ITeam[]>{
    return  this._httpClient.get<ITeam[]>(this.url)
            .pipe(
                tap((data)=>{
                    console.log(data)
                }),
              catchError(this.handleError)
            );
  }
  
  getAssociateById(_UserID:number):Observable<ITeam[]>{
    return  this._httpClient.get<ITeam[]>(this.url)
    .pipe(
        tap((data)=>{
          this.team = this.team.filter(data => data.AssociateId === _UserID);
        }),
      catchError(this.handleError)
    );
}

  handleError(err:HttpErrorResponse){
    return throwError(err.message || 'Server Error');
  }
}
