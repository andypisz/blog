import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import {PostsService} from './services/posts.service';
import { HeaderComponent } from './header/header.component';
import {Router} from '@angular/router';
import { PostViewComponent } from './post-view/post-view.component';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HeaderComponent,
    PostViewComponent,
    NewPostComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
