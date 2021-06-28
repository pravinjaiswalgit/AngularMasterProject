import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITeam } from '../iteam';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teamldetails',
  templateUrl: './teamldetails.component.html',
  styleUrls: ['./teamldetails.component.css']
})
export class TeamldetailsComponent implements OnInit {

  pageTitle="Team Details : "
  team:ITeam[] = []
 
  
  constructor(private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private _teamService:TeamService) { 

    }

  ngOnInit(): void {
    const AssociateId:number=Number(this._activatedRoute.snapshot.paramMap.get('AssociateId'));
     this.pageTitle+=AssociateId
       this._teamService.getAllTeamMember().subscribe({
         next:(data)=>{
          this.team = data.filter(data=>data.AssociateId===AssociateId)
         }
       });
   }
  
   onBack():void{
       this._router.navigate(['/team'])
   }
}
