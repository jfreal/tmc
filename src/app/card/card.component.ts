import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  card: any;
  cardNameParam: string;

  constructor(
    private cardService: CardsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCard();
  }

  getCard(): void {
    this.cardNameParam = this.route.snapshot.paramMap.get('cardName');

    this.cardService.getCard(this.cardNameParam, (result) => {
      this.card = result;
    })
  }

  isNumber(value: string | number): boolean {
    return !isNaN(Number(value.toString()));
  }

  counter(n: string): any[] {

    if (n && this.isNumber(n)) {
      return Array.from(Array(Number(n)).keys());
    }

    return Array(0);
  }
}
