import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']  
})
export class CardListComponent implements OnInit {
  cards: any[];

  constructor(private cardsService: CardsService) { 
    cardsService.getCards((result)=>{
      this.cards = result;
    });
  }

  isNumber(value: string | number): boolean
  {
    return !isNaN(Number(value.toString()));
  }

  counter(n: string): any[] {    

    if(n && this.isNumber(n)){      
      return Array.from(Array(Number(n)).keys());
    }

    return Array(0);
  }

  ngOnInit() {
  }
}