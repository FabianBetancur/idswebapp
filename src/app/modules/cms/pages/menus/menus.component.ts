import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import {
  faCircleRight,
  faCircleLeft,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
})
export class MenusComponent {
  faCircleDot = faCircleDot;
  faCircleRight = faCircleRight;
  faCircleLeft = faCircleLeft;

  constructor(public themeService: ThemeService) {}
}
