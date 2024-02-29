import { Component } from '@angular/core';
import {
  faFireFlameCurved,
  faMagnifyingGlass,
  faHouseChimneyUser,
  faCloud,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout-b',
  templateUrl: './layout-b.component.html',
  styleUrls: ['./layout-b.component.scss'],
})
export class LayoutBComponent {
  faFireFlameCurved = faFireFlameCurved;
  faMagnifyingGlass = faMagnifyingGlass;
  faHouseChimneyUser = faHouseChimneyUser;
  faCloud = faCloud;
  src: string = '/assets/images/default/user.png';
  src2: string = '/assets/images/default/sample3.jpg';
}
