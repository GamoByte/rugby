import { Component, OnInit } from '@angular/core';
import { Braaiers } from '../model/braai.model';


@Component({
  selector: 'app-braai',
  templateUrl: './braai.component.html',
  styleUrls: ['./braai.component.scss']
})
export class BraaiComponent implements OnInit {

  braaiers: Braaiers[] = [
    // new Braaiers('08:00-09:30','-','-','-','-'),
    // new Braaiers('09:00-10:30','-','-','-','-'),
    // new Braaiers('10:00-11:30','-','-','-','-'),
    new Braaiers('11:00-12:30','Adriaanus Quintessential','2','3','4'),
    new Braaiers('10:00-11:30','Riette Nothnagel','-','-','-'),
  ];

  headElements = ['08:00-09:30', '09:00-10:30', '10:00-11:30', '11:00-12:30'];

  constructor() { }

  ngOnInit(): void {
  }

}
