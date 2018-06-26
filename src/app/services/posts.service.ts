import { Injectable } from '@angular/core';
import {Post} from '../models/Post.models';
import {P} from '@angular/core/src/render3';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

    posts: Post[] = [{
    title: 'Mon premier post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id ultricies felis.',
    loveIts: 0,
    id: 1,
    created_at: new Date()
  },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id ultricies felis. Aliquam et sodales nulla. Donec rutrum, justo quis cursus laoreet, metus mi lacinia sapien, ut hendrerit nulla purus a neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean aliquet mauris ut enim vehicula hendrerit. Vivamus sed nibh at neque aliquam lacinia. Vestibulum sit amet neque sed tellus ultricies finibus. Integer ut sodales risus. Integer lobortis dignissim augue, nec molestie velit rhoncus et.',
      loveIts: 0,
      id: 2,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id ultricies felis. Aliquam et sodales nulla. Donec rutrum, justo quis cursus laoreet, metus mi lacinia sapien, ut hendrerit nulla purus a neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      loveIts: 0,
      id: 3,
      created_at: new Date()
    }
  ];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(title: string, content: string, loveIts: number) {
    const postObject = {
      id: 0,
      title: '',
      content: '',
      loveIts: 0,
      created_at: new Date()
    };
    postObject.title = title;
    postObject.content = content;
    postObject.loveIts = loveIts;
    postObject.id = this.posts[(this.posts.length - 1)].id + 1;
    this.posts.push(postObject);
    this.emitPosts();
  }

  removePost(index: number) {
    this.posts.splice(index, 1);
    this.emitPosts();
  }

  loveIt(index: number) {
    this.posts[index].loveIts += 1;
    this.emitPosts();
  }

  dontLoveIt(index: number) {
    this.posts[index].loveIts -= 1;
    this.emitPosts();
  }
}
