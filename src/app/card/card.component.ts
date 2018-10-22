import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  card: any;

  constructor(
    private cardService: CardsService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    this.getCard();
  }

  getCard(): void {
    const id = this.route.snapshot.paramMap.get('id');    

    this.cardService.getCard(id, (result)=>{
      this.card = result;
    })
  }
}
