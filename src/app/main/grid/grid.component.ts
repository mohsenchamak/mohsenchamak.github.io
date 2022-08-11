import {Component, OnInit} from '@angular/core';
import {GridService} from "./grid.service";
import {Columns, GridModel, ListData} from "./grid-model";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  columns: Array<Columns> = [];
  listData: Array<ListData> = [];
  constructor(private service: GridService) {
  }

  ngOnInit(): void {
    this.service.getList().subscribe(response => {
      if (response) {
        this.columns = response.data.columns;
        this.listData = response.data.data;
      }
    });
  }

}
