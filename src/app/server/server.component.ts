import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.scss']
})

export class ServerComponent {
    
  elements: any = [
    {first: '-', second: '-', third: '-', fourth: '-'},
    {first: '-', second: '-', third: '-', fourth: '-'},
    {first: '-', second: '-', third: '-', fourth: '-'},
    {first: '-', second: '-', third: '-', fourth: '-'},
    {first: '-', second: '-', third: '-', fourth: '-'},
  ];

  headElements = ['08:00-09:30', '09:00-10:30', '10:00-11:30', '11:00-12:30'];

    constructor(){
        
    }


}