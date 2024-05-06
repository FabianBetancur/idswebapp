import { Component } from '@angular/core';

import {
  faBars,
  faTableList,
  faIdCard,
  faGrip,
  faBoxesStacked,
} from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-option-nav',
  templateUrl: './option-nav.component.html',
})
export class OptionNavComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  faBars = faBars;
  faTableList = faTableList;
  faIdCard = faIdCard;
  faGrip = faGrip;
  faBoxesStacked = faBoxesStacked;

  constructor(public themeService: ThemeService) {}
}
