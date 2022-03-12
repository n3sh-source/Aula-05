import { Component, OnInit } from '@angular/core';
import { ListData } from '../lista-details/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  list = ListData;

  constructor() {}

  ngOnInit() {}
}
