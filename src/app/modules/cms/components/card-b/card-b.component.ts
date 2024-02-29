import { Component } from '@angular/core';
import { faDice } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-card-b',
  templateUrl: './card-b.component.html',
  styleUrls: ['./card-b.component.scss'],
})
export class CardBComponent {
  constructor(public themeService: ThemeService) {}

  faDice = faDice;
  isActive1: boolean = false;
  isActive2: boolean = true;
  isActive3: boolean = false;
  src2: string = '/assets/images/default/sample.jpg';

  toggle1() {
    this.isActive1 = !this.isActive1;
    this.isActive2 = false;
    this.isActive3 = false;
  }
  toggle2() {
    this.isActive2 = !this.isActive2;
    this.isActive1 = false;
    this.isActive3 = false;
  }
  toggle3() {
    this.isActive3 = !this.isActive3;
    this.isActive1 = false;
    this.isActive2 = false;
  }
}
