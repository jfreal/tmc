import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, take, filter } from 'rxjs/operators';
import { Card } from './models/card';

// I regret not casting cards to a static type
// a lot of code references card data by index which
// is a pain if you don't have the indexes memorized

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private getCardData(): Observable<Card[]> {

    return this.http.get('https://docs.google.com/spreadsheets/d/1DYKBgMTyhnLqQfFLuZGDH6Ax-9MMTdVNtkrYwTN6Fw4/gviz/tq?tqx=out:csv&sheet=cards', { responseType: 'text' }).pipe(map(response => {
      var parsed = this.papa.parse(response, { header: true });

      var arr: Card[] = [];

      arr = parsed.data.map((x: Card) => (<Card>{ ...x }));

      return arr;
    }));
  }

  getCard(cardName: string): Observable<Card> {

    let cards$ = this.getCardData();

    return cards$.pipe(take(1), map(response => {
      return response.filter(x => x.cardName.toLocaleLowerCase().replace(/ /g, '-') === cardName)[0];
    }))
  }

  cards: Card[];

  getCards(): Observable<Card[]> {
    var cardData = this.getCardData();

    return cardData;
  }

  constructor(private papa: Papa, private http: HttpClient) {
    this.cards = [];
  }
}