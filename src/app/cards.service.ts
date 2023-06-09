import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from './models/card';

// I regret not casting cards to a static type
// a lot of code references card data by index which
// is a pain if you don't have the indexes memorized

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  url: string;

  private getCardData(): Observable<Card[]> {

    return this.http.get('https://docs.google.com/spreadsheets/d/1DYKBgMTyhnLqQfFLuZGDH6Ax-9MMTdVNtkrYwTN6Fw4/gviz/tq?tqx=out:csv&sheet=cards', { responseType: 'text' }).pipe(map(response => {
      var parsed = this.papa.parse(response, { header: true });

      var arr: Card[] = [];

      arr = parsed.data.map(x => (<Card>{ ...x }));

      console.log(arr);

      //console.log(parsed.data);

      //removing header rows and actual card types we don't have a great UI for
      var filteredCards = parsed.data.filter(x => x[0] !== 'Card Name');
      filteredCards = filteredCards.filter(x => x[0] !== 'Card Identifiers');
      filteredCards = filteredCards.filter(x => ['Active', 'Event', 'Automated'].includes(x[3]));

      return arr;
    }));
  }

  async getCard(cardName: string): Promise<any> {

    var cards = await this.getCardData();

    return cards.pipe(map(response => {
      return response.filter(x => x.cardName.toLocaleLowerCase().replace(/ /g, '-') === cardName)[0];
    }))
  }

  cards: any[];

  getCards(): Observable<Card[]> {
    var cardData = this.getCardData();

    return cardData;
  }

  constructor(private papa: Papa, private http: HttpClient) {
    this.url = environment.production ? "https://terraformingmars.cards/" : "http://localhost:4200/"
    this.cards = [];
  }
}