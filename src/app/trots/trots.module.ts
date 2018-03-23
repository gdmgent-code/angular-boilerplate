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
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    CoreModule
  ],
  declarations: [ProjectsListComponent, ProjectsPageComponent, ProjectPageComponent, ProjectDetailComponent],
  exports: [
    ProjectsListComponent,
    ProjectPageComponent,
    ProjectsPageComponent
  ]
})
export class TrotsModule { }
