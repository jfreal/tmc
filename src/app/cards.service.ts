import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  url: string;

  getCard(cardName: string, callback: (result: any) => void): any {

    if (this.cards) {
      callback(this.cards.filter(x => x[0].toLocaleLowerCase().replace(/ /g, '-') === cardName)[0]);
      return;
    }

    this.papa.parse(this.url + 'assets/cards.csv', {
      download: true,
      complete: (result) => {
        this.cards = result.data;

        callback(this.cards.filter(x => x[0].toLocaleLowerCase().replace(/ /g, '-') === cardName)[0]);
      }
    });
  }

  cards: any[];

  getCards(callback): void {

    if (this.cards) {
      callback(this.cards);
      return;
    }

    this.papa.parse(this.url + '/assets/cards.csv', {
      download: true,
      complete: (result) => {
        this.cards = result.data.filter(x => x[0] !== 'Card Name');
        this.cards = this.cards.filter(x => x[0] !== 'Card Identifiers');

        callback(this.cards);
      }
    });
  }

  constructor(private papa: Papa) {
    this.url = environment.production ? "https://terraformingmars.cards/" : "http://localhost:4200/"
  }
}