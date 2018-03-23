import { Component, OnInit } from '@angular/core';

/*
Services
*/
import { TrotsService } from '../../../core/services/trots.service';

/*
Models
*/
import { Project } from '../../../core/models/project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  projects: Array<Project>;

  constructor(private _trotsService: TrotsService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this._trotsService.getProjects().subscribe(
      data => {
        this.projects = data
      },
      err => console.log(err),
      () => console.log('Projects loaded!')
    )
  }

}
