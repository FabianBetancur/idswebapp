import { Component, Input, OnInit } from '@angular/core';
import { GenericDataSource } from '@shared/data-source/data-source';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent implements OnInit {
  dataSource = new GenericDataSource();
  @Input() data: any | null = null;
  @Input() columns: string[] = [];
  @Input() class: string = '';

  constructor(public themeService: ThemeService) {}
  ngOnInit(): void {
    //this.dataSource.init(this.data);
  }
}
