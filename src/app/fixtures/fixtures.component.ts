import { Component, NgModule } from '@angular/core';
import { Fixtures } from './fixtures.model';
import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @NgModule({
//     imports:[CommonModule]
// })

@Component ({
    selector: 'app-fixtures',
    templateUrl: './fixtures.component.html',
    styleUrls: ['../app.component.scss']
})

export class FixturesComponent{
    fixtures: Fixtures[] =[
        new Fixtures('08:00','14A','Field B','-'),
        new Fixtures('08:00','15B','Field A','-')
    ];

    constructor(private goBack:Router, public router:Router){}

    elements: any = [
        {time: '08:00', team: '14A', field: 'Field B', score: '-'},
        {time: '08:00', team: '15B', field: 'Field A', score: '-'},
        {time: '09:00', team: '16A', field: 'Baytopp', score: '-'},
        {time: '10:00', team: '2nd XV', field: 'Baytopp', score: '-'},
        {time: '11:00', team: '1st XV', field: 'Baytopp', score: '-'},
      ];
    
      headElements = ['Time', 'Team', 'Field', 'Score'];
    
    onBack(){
        this.goBack.navigate(['/'])
    }

    onView(){
        console.log('View has been clicked');
    }
}