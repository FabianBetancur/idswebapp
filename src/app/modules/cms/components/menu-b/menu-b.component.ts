import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';

import { faCircleXmark, faMugHot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-b',
  templateUrl: './menu-b.component.html',
  styleUrls: ['./menu-b.component.scss'],
})
export class MenuBComponent {
  faCircleXmark = faCircleXmark;
  faMugHot = faMugHot;
  constructor(public themeService: ThemeService) {}
  changeTheme() {
    this.themeService.setTheme(
      this.themeService.getTheme() === 'light' ? 'dark' : 'light'
    );
  }
}
