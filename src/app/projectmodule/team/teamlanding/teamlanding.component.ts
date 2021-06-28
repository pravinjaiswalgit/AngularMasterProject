import { Component, OnInit } from '@angular/core';
import { ITeam } from '../iteam';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teamlanding',
  templateUrl: './teamlanding.component.html',
  styleUrls: ['./teamlanding.component.css']
})
export class TeamlandingComponent implements OnInit {

  title:string="Team List !!!"
  teams:ITeam[]=[];
  errorMessage:string=""
  showImage:boolean=false
  imageHeight:number=60;
  imageWidth:number=60;

  constructor(private _teamService:TeamService){
  }

  ngOnInit(): void {
    this._teamService.getAllTeamMember().subscribe({
      next:(data)=>this.teams=data,
      error:(error) => this.errorMessage=error
    });
  }

  toggleImage():void{
    this.showImage=!this.showImage
  }
}
