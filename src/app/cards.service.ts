import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

// I regret not casting cards to a static type
// a lot of code references card data by index which
// is a pain if you don't have the indexes memorized

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  url: string;

  private getCardData(): Observable<any[]> {

    return this.http.get(this.url + 'assets/cards.csv', { responseType: 'text' }).pipe(map(response => {
      var parsed = this.papa.parse(response);

      //removing header rows and actual card types we don't have a great UI for
      var filteredCards = parsed.data.filter(x => x[0] !== 'Card Name');
      filteredCards = filteredCards.filter(x => x[0] !== 'Card Identifiers');
      filteredCards = filteredCards.filter(x => ['Active', 'Event', 'Automated'].includes(x[3]));

      return filteredCards;
    }));
  }

  getCard(cardName: string): any {
    return this.getCardData().pipe(map(response => {
      return response.filter(x => x[0].toLocaleLowerCase().replace(/ /g, '-') === cardName)[0];
    }))
  }

  cards: any[];

  getCards(): any {
    var cardData = this.getCardData();

    return cardData;
  }

  constructor(private papa: Papa, private http: HttpClient) {
    this.url = environment.production ? "https://terraformingmars.cards/" : "http://localhost:4200/"
  }
}