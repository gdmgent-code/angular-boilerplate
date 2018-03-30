import { NgModule } from '@angular/core';

import { MatCardModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

import { PlatformModule } from '@angular/cdk/platform';
import { ObserversModule } from '@angular/cdk/observers';

@NgModule({
  imports: [
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  declarations: [],
  exports:  [
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
