import { Component, OnInit, NgModule } from '@angular/core';
import { Braaiers } from '../model/braai.model';

export interface BraaiElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: BraaiElement[] = [
  {position: '1',  name: 'Cathy', weight: '1', symbol: 'H'},
  {position: '2',  name: 'Helium', weight: '2', symbol: 'He'},
  {position: '3',  name: 'Lithium', weight: '3', symbol: 'Li'},
  {position: '4',  name: 'Beryllium', weight: '4', symbol: 'Be'},
  {position: '5',  name: 'Boron', weight: '5', symbol: 'B'},
];


@Component({
  selector: 'app-braai',
  templateUrl: './braai.component.html',
  styleUrls: ['./braai.component.scss']
})
export class BraaiComponent implements OnInit {

  displayedColumns: string[] = ['08:00-09:30', '09:00-10:30', '10:00-11:30', '11:00-12:30'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: BraaiElement[] = ELEMENT_DATA;

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }


  // braaiers: Braaiers[] = [
  //   // new Braaiers('08:00-09:30','-','-','-','-'),
  //   // new Braaiers('09:00-10:30','-','-','-','-'),
  //   // new Braaiers('10:00-11:30','-','-','-','-'),
  //   new Braaiers('11:00-12:30','Adriaanus Quintessential','2','3','4'),
  //   new Braaiers('10:00-11:30','Riette Nothnagel','-','-','-'),
  // ];

  // headElements = ['08:00-09:30', '09:00-10:30', '10:00-11:30', '11:00-12:30'];



  constructor() { }

  ngOnInit(): void {
  }

}
