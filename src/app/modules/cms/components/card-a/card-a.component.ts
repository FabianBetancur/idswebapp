import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-card-a',
  templateUrl: './card-a.component.html',
  styleUrls: ['./card-a.component.scss'],
})
export class CardAComponent {
  date: Date = new Date();
  src: string = '/assets/images/default/user.png';
  src2: string = '/assets/images/default/sample.jpg';
  constructor(public themeService: ThemeService) {}
}
