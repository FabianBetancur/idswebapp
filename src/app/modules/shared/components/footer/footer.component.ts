import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  constructor(public themeService: ThemeService) {}
}
