import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { UrlHandlingStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  url: string;

  private getCardData(): Observable<any[]> {

    return this.http.get(this.url + 'assets/cards.csv', { responseType: 'text' }).pipe(map(response => {
      var parsed = this.papa.parse(response);

      var filteredCards = parsed.data.filter(x => x[0] !== 'Card Name');
      filteredCards = filteredCards.filter(x => x[0] !== 'Card Identifiers');

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