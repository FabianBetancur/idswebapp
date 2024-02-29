import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';
import { DataService } from '@services/data.service';
import { HttpClient } from '@angular/common/http';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
})
export class TablesComponent {
  dataSource: any[] = [];
  columns: string[] = ['column 1', 'column 2', 'column 3', 'column 4'];
  faCircleDot = faCircleDot;
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
      this.dataSource = data;
      //console.log(data);
    });
  }
}
