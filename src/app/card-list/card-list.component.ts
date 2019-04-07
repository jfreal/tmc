import { Component, OnInit, Input } from '@angular/core';
import { CardsService } from '../cards.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cards: any[];
  tags: string[];

  constructor(private cardsService: CardsService, private route: ActivatedRoute, private router: Router) {
    this.tags = [];
  }

  filterCardsByTags() {

    this.cardsService.getCards().subscribe(data => {
      let cards = data;

      let cardTagMap = {
        'science': 27,
        'building': 28,
        'space': 29,
        'microbe': 30,
        'plant': 31,
        'animal': 32,
        'city': 33,
        'earth': 34,
        'jovian': 35,
        'energy': 36,
        'venus': 37,
        'event': 38
      };

      for (var tag of this.tags) {
        cards = cards.filter(x => x[cardTagMap[tag]] !== '0')
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

  onTagClick(tag) {

    if (this.tags.includes(tag)) {
      let index = this.tags.indexOf(tag);
      console.log(index);
      this.tags.splice(index, 1);
    } else {
      this.tags.push(tag);
    }

    this.router.navigate(['/'], { queryParams: { tags: this.tags.join(',') } });
  }

  ngOnInit() {

    this.route.queryParams
      .subscribe(params => {

        if (params.tags) {
          this.tags = params.tags.split(',');
        }

        this.filterCardsByTags()
      });

    const typeahead = fromEvent(document.getElementById('cardNameSearchInput') as HTMLTextAreaElement, 'input').pipe(
      map((e: KeyboardEvent) => e.target.value),
      filter(text => text.length > 2 || text === ''),
      debounceTime(50)
    );

    typeahead.subscribe(searchValue => {
      // Handle the data from the API
      this.cardsService.getCards().subscribe(data => {
        this.cards = data.filter(card => card[0].toLowerCase().includes(searchValue.toLowerCase()))
        console.log(searchValue)
      });
    });
  };
}