import { Component, OnInit, Input } from '@angular/core';
import { CardsService } from '../cards.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { Card } from '../models/card';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cards: Card[];
  tags: string[];

  constructor(private cardsService: CardsService, private route: ActivatedRoute, private router: Router, private titleService: Title) {
    this.tags = [];
    this.cards = [];
  }

  filterCardsByTags() {

    this.cardsService.getCards().subscribe(data => {
      let cards = data;

      for (var tag of this.tags) {

        if (tag === 'science') {
          cards = cards.filter(x => x.tagScience !== '0')
        }

        if (tag === 'building') {
          cards = cards.filter(x => x.tagBuilding !== '0')
        }

        if (tag === 'space') {
          cards = cards.filter(x => x.tagSpace !== '0')
        }

        if (tag === 'microbe') {
          cards = cards.filter(x => x.tagMicrobe !== '0')
        }

        if (tag === 'plant') {
          cards = cards.filter(x => x.tagPlant !== '0')
        }

        if (tag === 'animal') {
          cards = cards.filter(x => x.tagAnimal !== '0')
        }

        if (tag === 'city') {
          cards = cards.filter(x => x.tagCity !== '0')
        }

        if (tag === 'earth') {
          cards = cards.filter(x => x.tagEarth !== '0')
        }

        if (tag === 'jovian') {
          cards = cards.filter(x => x.tagJovian !== '0')
        }

        if (tag === 'energy') {
          cards = cards.filter(x => x.tagEnergy !== '0')
        }

        if (tag === 'venus') {
          cards = cards.filter(x => x.tagVenus !== '0')
        }

        if (tag === 'event') {
          cards = cards.filter(x => x.tagEvent !== '0')
        }
      }

      this.cards = cards;
    });
  }

  isNumber(value: string | number): boolean {
    return !isNaN(Number(value.toString()));
  }

  counter(n: string): any[] {
    if (n && this.isNumber(n)) {
      let arrayLength = Math.abs(Number(n));
      return Array.from(Array(arrayLength).keys());
    }

    return Array(0);
  }

  onTagClick(tag: string) {

    if (this.tags.includes(tag)) {
      let index = this.tags.indexOf(tag);
      this.tags.splice(index, 1);
    } else {
      this.tags.push(tag);
    }

    if (this.tags.length > 0) {
      this.router.navigate(['/'], { queryParams: { tags: this.tags.join(',') } });
    } else {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {

    this.titleService.setTitle('Terraforming Mars Cards')

    this.route.queryParams
      .subscribe(params => {

        if (params['tags']) {
          this.tags = params['tags'].split(',');
        }

        this.filterCardsByTags()
      });

    const typeahead = fromEvent(document.getElementById('cardNameSearchInput') as HTMLTextAreaElement, 'input').pipe(
      map((e: Event) => (<HTMLInputElement>e.target).value),
      filter(text => text.length > 2 || text === ''),
      debounceTime(50)
    );

    typeahead.subscribe(searchValue => {
      // Handle the data from the API
      this.cardsService.getCards().subscribe(data => {
        this.cards = data.filter(card => card.cardName.toLowerCase().includes(searchValue.toLowerCase()))
      });
    });
  };
}