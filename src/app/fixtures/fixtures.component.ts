import { Component, NgModule } from '@angular/core';
import { Fixtures } from '../model/fixtures.model';
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
        new Fixtures('08:00','14A','Field B','-','https://www.idp-apps.com/wp-content/uploads/2020/04/Saints-Logo-2.png','https://www.idp-apps.com/wp-content/uploads/2020/04/Uplands-College-2.png'),
        new Fixtures('08:00','15B','Field A','-','https://www.idp-apps.com/wp-content/uploads/2020/04/Saints-Logo-2.png','https://www.idp-apps.com/wp-content/uploads/2020/04/download-2.jpeg'),
        new Fixtures('08:00','16C','Field C','-','https://www.idp-apps.com/wp-content/uploads/2020/04/Uplands-College-2.png','https://www.idp-apps.com/wp-content/uploads/2020/04/Saints-Logo-2.png'),
        new Fixtures('09:00','3rd','Baytopp','-','https://www.idp-apps.com/wp-content/uploads/2020/04/Saints-Logo-2.png','https://www.idp-apps.com/wp-content/uploads/2020/04/download-2.jpeg'),
        new Fixtures('09:00','1st','Field A','-','https://www.idp-apps.com/wp-content/uploads/2020/04/Uplands-College-2.png','https://www.idp-apps.com/wp-content/uploads/2020/04/84121234_127100395501546_225989148912123904_n-2.png'),
    ];

    constructor(private goBack:Router, public router:Router){}

   
    onBack(){
        this.goBack.navigate(['/'])
    }

    onView(){
        console.log('View has been clicked');
    }
}