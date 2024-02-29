import { Component } from '@angular/core';
import { DataService } from '@services/data.service';
import { GenericDataSource } from '@shared/data-source/data-source';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-table-c',
  templateUrl: './table-c.component.html',
  styleUrls: ['./table-c.component.scss'],
})
export class TableCComponent {
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
