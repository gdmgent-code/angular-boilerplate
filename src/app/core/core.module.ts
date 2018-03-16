import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { NmdService } from './services/nmd.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    NotFoundPageComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NotFoundPageComponent
  ],
  providers: [NmdService]
})
export class CoreModule { }
