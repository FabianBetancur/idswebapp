import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { GenericDataSource } from '@shared/data-source/data-source';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-table-a',
  templateUrl: './table-a.component.html',
  styleUrls: ['./table-a.component.scss'],
})
export class TableAComponent implements OnInit {
  dataSource = new GenericDataSource();
  columns: string[] = ['column 1', 'column 2', 'column 3', 'column 4'];

  constructor(
    private http: HttpClient,
    private dataService: DataService,
    public themeService: ThemeService
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
