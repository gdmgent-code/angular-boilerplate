import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

/*
Components
*/
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { NotFoundPageComponent } from 
'./core/pages/not-found-page/not-found-page.component';
import { PostsPageComponent } from './posts/pages/posts-page/posts-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'posts', component: PostsPageComponent },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
