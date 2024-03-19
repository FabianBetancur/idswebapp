import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
})
export class MenusComponent {
  faCircleDot = faCircleDot;
  toggle: boolean = false;
  onMouseOver() {
    this.toggle = true;
  }
  onMouseOut() {
    this.toggle = false;
  }

  constructor(public themeService: ThemeService) {}
}
