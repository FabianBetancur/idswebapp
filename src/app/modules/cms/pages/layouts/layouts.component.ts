import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';
import { faCircleDot, fa1, fa2 } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
})
export class LayoutsComponent {
  faCircleDot = faCircleDot;
  fa1 = fa1;
  fa2 = fa2;
  isActive1: boolean = true;
  isActive2: boolean = false;
  toggle: boolean = false;
  onMouseOver() {
    this.toggle = true;
  }
  onMouseOut() {
    this.toggle = false;
  }
  constructor(public themeService: ThemeService) {}
  toggle1() {
    this.isActive1 = !this.isActive1;
    this.isActive2 = false;
  }

  toggle2() {
    this.isActive2 = !this.isActive2;
    this.isActive1 = false;
  }
}
