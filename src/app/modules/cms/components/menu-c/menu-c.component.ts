import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';

import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-c',
  templateUrl: './menu-c.component.html',
  styleUrls: ['./menu-c.component.scss'],
})
export class MenuCComponent {
  faFaceSmile = faFaceSmile;
  src: string = '/assets/images/default/user.png';
  constructor(public themeService: ThemeService) {}
}
