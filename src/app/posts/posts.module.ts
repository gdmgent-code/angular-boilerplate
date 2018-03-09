import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostsPageComponent, PostsListComponent],
  exports: [
    PostsPageComponent, 
    PostsListComponent,
  ]
})
export class PostsModule { }
