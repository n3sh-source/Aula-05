import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListData } from '../lista-details/list';

@Component({
  selector: 'app-lista-details',
  templateUrl: './lista-details.component.html',
  styleUrls: ['./lista-details.component.css'],
})
export class ListaDetailsComponent implements OnInit {
  item;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((par) => {
      this.item = ListData[par.get('index')];
    });
  }
}
