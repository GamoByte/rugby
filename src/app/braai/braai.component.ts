import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-braai',
  templateUrl: './braai.component.html',
  styleUrls: ['./braai.component.scss']
})
export class BraaiComponent implements OnInit {

  elements: any = [
    {first: '-', second: '-', third: '-', fourth: '-'},
    {first: '-', second: '-', third: '-', fourth: '-'},
    {first: '-', second: '-', third: '-', fourth: '-'},
    {first: '-', second: '-', third: '-', fourth: '-'},
    {first: '-', second: '-', third: '-', fourth: '-'},
  ];

  headElements = ['08:00-09:30', '09:00-10:30', '10:00-11:30', '11:00-12:30'];

  constructor() { }

  ngOnInit(): void {
  }

}
