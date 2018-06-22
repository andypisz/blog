import { Component, OnInit } from '@angular/core';
import {st} from '@angular/core/src/render3';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  }

  constructor() { }

  ngOnInit() {
  }

}
