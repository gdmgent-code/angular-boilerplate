import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*
Modules
*/
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { MaterialModule } from './material/material.module';
import { PostsModule } from './posts/posts.module';
import { TrotsModule } from './trots/trots.module';

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
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HomeModule,
    MaterialModule,
    PostsModule,
    TrotsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
