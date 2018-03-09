import { Component, OnInit } from '@angular/core';

import { Post } from '../../../core/models/post';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {
  post: Post;

  constructor() { }

  ngOnInit() {
    const post = new Post();
    post.id = 'kjdghkfdgjsrldkghfxjgmldfk';
    post.title = 'jd dskkds!ds ndosdsdsj dsjdhsjd';
    this.post = post;
  }

}
