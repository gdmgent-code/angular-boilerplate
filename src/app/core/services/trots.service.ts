import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
Settings
*/
import { environment } from '../../../environments/environment';

/*
Models
*/
import { Project } from '../models/project';

@Injectable()
export class TrotsService {
  private _apiEndPoint = `${environment.trotsAPI.url}${environment.trotsAPI.endPoints.projects}`;

  constructor(private _httpClient: HttpClient) { }

  getProjects() {
    return this._httpClient.get<Array<Project>>(`${this._apiEndPoint}`);
  }

}
