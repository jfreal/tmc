import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CardsService } from '../cards.service';
import { Title, Meta } from '@angular/platform-browser';
import { Card } from '../models/card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  card: any;
  cardNameParam: string;
  contentPath: string;

  constructor(
    private cardService: CardsService,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.cardNameParam = '';
    this.contentPath = '';
  }

  ngOnInit() {
    this.getCard();
  }

  async getCard(): Promise<void> {
    this.cardNameParam = this.route.snapshot.paramMap.get('cardName') ?? '';

    var card = this.cardService.getCard(this.cardNameParam);

    card.subscribe((r: Card) => {
      this.card = r;
      this.titleService.setTitle('Terraforming Mars Card - ' + r.cardName);
      this.metaService.addTag({ name: 'description', content: r.cardName + ' is a card in Terraforming Mars.' });
      this.contentPath = `./assets/content/${r.deck.toLowerCase()}.md`;
    });
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
