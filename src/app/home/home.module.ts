import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TrotsModule } from '../trots/trots.module';

@NgModule({
  imports: [
    CommonModule,
    TrotsModule
  ],
  declarations: [
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
