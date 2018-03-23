import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/*
Services
*/
import { TrotsService } from '../../../core/services/trots.service';

/*
Models
*/
import { Project } from '../../../core/models/project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor(private _route: ActivatedRoute,
    private _trotsService: TrotsService) { }

  ngOnInit() {
    const id = this._route.snapshot.params['id'];
    this.getProjectById(id);
  }

  getProjectById(id: String): void {
    this._trotsService.getProjectById(id, 
      (project: Project) => {
        console.log(project);
        this.project = project;
      },
      (err: Error) => {
        console.log(err);
      }
    );
  }

}
