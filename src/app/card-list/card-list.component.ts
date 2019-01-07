import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cards: any[];
  tag: string;

  constructor(private cardsService: CardsService, private route: ActivatedRoute) {
    this.cardsService.getCards().subscribe(data => {
      var cards = data;

      console.log(this.tag)

      if (this.tag) {
        console.log('asdf')

        cards = cards.filter(x => {
          return (this.tag === 'science' && x[27] !== '0') ||
            (this.tag === 'building' && x[28] !== '0') ||
            (this.tag === 'space' && x[29] !== '0')
        })

        // < div * ngFor="let i of counter(card[27])" class="tag science" > <i class="fas fa-atom " > </i></div >
        //   <div * ngFor="let i of counter(card[28])" class="tag building" > <i class="fas fa-warehouse " > </i></div >
        //     <div * ngFor="let i of counter(card[29])" class="tag space" > <i class="fas fa-haykal " > </i></div >
        //       <div * ngFor="let i of counter(card[30])" class="tag microbe" > <i class="fas fa-bug " > </i></div >
        //         <div * ngFor="let i of counter(card[31])" class="tag plant" > <i class="fas fa-leaf " > </i></div >
        //           <div * ngFor="let i of counter(card[32])" class="tag animal" > <i class="fas fa-paw " > </i></div >
        //             <div * ngFor="let i of counter(card[33])" class="tag city" > <i class="fas fa-city " > </i> </div >
        //               <div * ngFor="let i of counter(card[34])" class="tag earth" > <i class="fas fa-globe-americas " > </i></div >
        //                 <div * ngFor="let i of counter(card[35])" class="tag jovian" > </div>
        //                   < div * ngFor="let i of counter(card[36])" class="tag energy" > <i class="fas fa-bolt " > </i></div >
        //                     <div * ngFor="let i of counter(card[37])" class="tag venus" > V < /div>
        //                       < div * ngFor="let i of counter(card[38])" class="tag event" > <i class="fas fa-long-arrow-alt-down " > </i></div >
      }



      this.cards = cards;
    });
  }

  isNumber(value: string | number): boolean {
    return !isNaN(Number(value.toString()));
  }

  counter(n: string): any[] {

    if (n && this.isNumber(n)) {
      var arrayLength = Math.abs(Number(n));
      return Array.from(Array(arrayLength).keys());
    }

    return Array(0);
  }

  ngOnInit() {

    this.route.queryParams
      .subscribe(params => {
        console.log(params);

        this.tag = params.tag;
      });
  }
}
