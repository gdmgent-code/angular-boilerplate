import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*
Modules
*/
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { PostsModule } from './posts/posts.module';

/*
Components
*/
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HomeModule,
    PostsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
