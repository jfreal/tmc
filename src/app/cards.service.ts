import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  

  getCard(cardNumber: string, callback: (result: any) => void): any {
    
    if(this.cards){
      callback(this.cards.filter(x=>x[1] === cardNumber)[0]);  
    }
      
    this.papa.parse('http://localhost:4200/assets/cards.csv',{
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
    }
      
    this.papa.parse('http://localhost:4200/assets/cards.csv',{
      download: true,    
      complete: (result) => {
              this.cards = result.data;

              callback(result.data);    
          }
      });       
  }  

  constructor(private papa: Papa) {       
   
  }
}