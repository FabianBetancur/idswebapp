import { Component, Input } from '@angular/core';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() statusDetail: 'loading' | 'success' | 'failed' | 'init' = 'init';
  constructor(public themeService: ThemeService) {}

  onClose() {
    this.statusDetail = 'init';
  }
}
