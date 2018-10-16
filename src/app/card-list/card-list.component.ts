import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']  
})
export class CardListComponent implements OnInit {
  cards: any[];

  constructor(private papa: Papa) {
    const csvData = '"Hello","World!"';
    
    this.cards = []

    this.papa.parse('http://localhost:4200/cards.csv',{
    download: true,    
    complete: (result) => {
            console.log('Parsed: ', result);
            this.cards = result.data;            
        }
    });
}

  ngOnInit() {
  }

}
