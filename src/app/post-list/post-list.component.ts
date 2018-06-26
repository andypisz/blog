import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/Post.models';
import {Subscription} from 'rxjs';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;
  @Input() postIndex: number;

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  onLoveit() {
    this.postsService.loveIt(this.postIndex);
  }

  onDontLoveit() {
    this.postsService.dontLoveIt(this.postIndex);
  }

  onDelete() {
    this.postsService.removePost(this.postIndex);
  }

  getColor() {
    if (this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }

  ngOnInit() {
  }

}
