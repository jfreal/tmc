import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']  
})
export class CardListComponent implements OnInit {
  cards: any[];


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


  constructor(private papa: Papa) {
    const csvData = '"Hello","World!"';
    
    this.cards = []    

    this.papa.parse('http://tmcmaster.azurewebsites.net/assets/cards.csv',{
    download: true,    
    complete: (result) => {
            console.log('Parsed: ', result);
            this.cards = result.data;            
        }
    });
}

  ngOnInit() {
  }

}
