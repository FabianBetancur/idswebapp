import { Component } from '@angular/core';
import {
  faBars,
  faTableList,
  faIdCard,
  faGrip,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn-nav',
  templateUrl: './btn-nav.component.html',
})
export class BtnNavComponent {
  faBars = faBars;
  faTableList = faTableList;
  faIdCard = faIdCard;
  faGrip = faGrip;
}
