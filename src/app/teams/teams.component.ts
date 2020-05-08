import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teams } from '../model/teams.model';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams: Teams[] =[
    new Teams('St Stithians','14A','14A','https://www.idp-apps.com/wp-content/uploads/2020/04/Saints-Logo-2.png','-'),
    new Teams('Uplands','16C','16C','https://www.idp-apps.com/wp-content/uploads/2020/04/Uplands-College-2.png','-'),
    new Teams('Roedean','1st','18A','https://www.idp-apps.com/wp-content/uploads/2020/04/84121234_127100395501546_225989148912123904_n-2.png','-'),
];

  constructor(private goBack:Router, public router:Router) { }

  ngOnInit(): void {
  }

  onBack(){
    this.goBack.navigate(['/'])
}

}
