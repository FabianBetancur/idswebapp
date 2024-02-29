import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';
import { RequestStatus } from '@models/request-status.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  statusDetail: RequestStatus = 'init';

  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    //this.statusDetail = 'init';
  }

  changeTheme() {
    this.themeService.setTheme(
      this.themeService.getTheme() === 'light' ? 'dark' : 'light'
    );
  }
}
