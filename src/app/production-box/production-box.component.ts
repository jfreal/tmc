import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-production-box',
  templateUrl: './production-box.component.html',
  styleUrls: ['./production-box.component.css']
})
export class ProductionBoxComponent implements OnInit {

  @Input() card: object;

  constructor() { }

  ngOnInit() {
  }

}
