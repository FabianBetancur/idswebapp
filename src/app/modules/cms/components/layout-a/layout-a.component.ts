import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout-a',
  templateUrl: './layout-a.component.html',
  styleUrls: ['./layout-a.component.scss'],
})
export class LayoutAComponent {
  faUpRightFromSquare = faUpRightFromSquare;
  src: string = '/assets/images/default/bannerimage.jpg';
  src2: string = '/assets/images/default/sample2.jpg';
  constructor(public themeService: ThemeService) {}
}
