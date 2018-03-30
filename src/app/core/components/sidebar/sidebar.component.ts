import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() sidebarClose = new EventEmitter(true);
  links: Array<any> = [
    { title: 'posts' }
  ]

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.sidebarClose.emit(true);
  }

}
