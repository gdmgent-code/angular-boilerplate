import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*
Libraries
*/
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
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
