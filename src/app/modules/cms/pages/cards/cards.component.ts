import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent {
  faCircleDot = faCircleDot;
  constructor(public themeService: ThemeService) {}
}
