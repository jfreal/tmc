import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  url: string;  

  getCard(cardNumber: string, callback: (result: any) => void): any {
    
    if(this.cards){
      callback(this.cards.filter(x=>x[1] === cardNumber)[0]);  
      return;
    }
      
    this.papa.parse(this.url + 'assets/cards.csv',{
      download: true,    
      complete: (result) => {
              this.cards = result.data;             

              callback(this.cards.filter(x=>x[1] === cardNumber)[0]);    
          }
      });
  }

  cards: any[];

  getCards(callback): void {

    if(this.cards){
      callback(this.cards);  
      return;
    }      

    this.papa.parse(this.url + '/assets/cards.csv',{
      download: true,    
      complete: (result) => {
              this.cards = result.data;            

              callback(this.cards);    
          }
      });       
  }  

  constructor(private papa: Papa) {       
    this.url = environment.production ? "https://terraformingmars.cards/" :"http://localhost:4200/"
  }
}