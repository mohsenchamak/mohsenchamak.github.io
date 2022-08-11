import {Component, Input, OnInit} from '@angular/core';
import {Columns, ListData} from "../../main/grid/grid-model";

@Component({
  selector: 'grid',
  templateUrl: './ordinary-grid.component.html',
  styleUrls: ['./ordinary-grid.component.scss']
})
export class OrdinaryGridComponent implements OnInit {
  @Input() columns: Array<Columns> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
