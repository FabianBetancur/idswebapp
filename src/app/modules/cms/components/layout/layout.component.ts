import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  constructor(public themeService: ThemeService) {}
}
