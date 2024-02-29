import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { GenericDataSource } from '@shared/data-source/data-source';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-table-b',
  templateUrl: './table-b.component.html',
  styleUrls: ['./table-b.component.scss'],
})
export class TableBComponent implements OnInit {
  dataSource = new GenericDataSource();
  columns: string[] = ['column 1', 'column 2', 'column 3', 'column 4'];
  constructor(
    public themeService: ThemeService,
    private dataService: DataService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getDemoData().subscribe((data) => {
      this.dataSource.init(data);
    });
  }
}
