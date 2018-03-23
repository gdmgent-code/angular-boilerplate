import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
Modules
*/
import { CoreModule } from '../core/core.module';

/*
Components
*/
import { ProjectsListComponent } from './components/projects-list/projects-list.component';

/*
Pages
*/
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';


@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [ProjectsListComponent, ProjectsPageComponent],
  exports: [
    ProjectsListComponent,
    ProjectsPageComponent
  ]
})
export class TrotsModule { }
