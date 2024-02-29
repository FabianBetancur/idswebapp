import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';
import { faIcons } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-a',
  templateUrl: './menu-a.component.html',
  styleUrls: ['./menu-a.component.scss'],
})
export class MenuAComponent {
  faIcons = faIcons;
  constructor(public themeService: ThemeService) {}
  changeTheme() {
    this.themeService.setTheme(
      this.themeService.getTheme() === 'light' ? 'dark' : 'light'
    );
  }
}
