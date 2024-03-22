import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';
import {
  faCircleDot,
  faCircleRight,
  faCircleLeft,
} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent {
  faCircleDot = faCircleDot;
  faCircleRight = faCircleRight;
  faCircleLeft = faCircleLeft;
  constructor(public themeService: ThemeService) {}
}
