import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quantity-display',
  templateUrl: './quantity-display.component.html',
  styleUrls: ['./quantity-display.component.css']
})
export class QuantityDisplayComponent implements OnInit {

  @Input() quantity: string
  @Input() card: object

  constructor() {
    this.quantity = ''
    this.card = {}
  }

  ngOnInit() {
  }

}
