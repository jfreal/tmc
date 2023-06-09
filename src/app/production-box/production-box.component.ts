import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-production-box',
  templateUrl: './production-box.component.html',
  styleUrls: ['./production-box.component.css']
})
export class ProductionBoxComponent implements OnInit {

  @Input()
  card!: Card;

  constructor() {
  }

  ngOnInit() {
  }

}
