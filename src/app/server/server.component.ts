import { Component } from '@angular/core';
import { Servers } from '../model/server.model';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.scss']
})

export class ServerComponent {
    
  servers: Servers[] = [
    // new Braaiers('08:00-09:30','-','-','-','-'),
    // new Braaiers('09:00-10:30','-','-','-','-'),
    // new Braaiers('10:00-11:30','-','-','-','-'),
    new Servers('11:00-12:30','Adriaanus Quintessential','2','3','4')
  ];


  // elements: any = [
  //   {first: '-', second: '-', third: '-', fourth: '-'},
  //   {first: '-', second: '-', third: '-', fourth: '-'},
  //   {first: '-', second: '-', third: '-', fourth: '-'},
  //   {first: '-', second: '-', third: '-', fourth: '-'},
  //   {first: '-', second: '-', third: '-', fourth: '-'},
  // ];

  // headElements = ['08:00-09:30', '09:00-10:30', '10:00-11:30', '11:00-12:30'];

    constructor(){
        
    }


}