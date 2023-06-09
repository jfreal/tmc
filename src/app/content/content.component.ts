import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  contentPath: string = "";
  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.contentPath = `./assets/content/${params['contentName']}.md`;
    });
  }
}