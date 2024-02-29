import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';
import { faLightbulb as farLight } from '@fortawesome/free-regular-svg-icons';
import {
  faLightbulb as fasLight,
  faHome,
  faUser,
  faAt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { RequestStatus } from '@models/request-status.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  farLight = farLight;
  fasLight = fasLight;
  faHome = faHome;
  faUser = faUser;
  faAt = faAt;
  faEnvelope = faEnvelope;
  alertStatus: boolean = false;
  statusDetail: RequestStatus = 'init';
  phoneNumber: string = '573118874065';

  constructor(public themeService: ThemeService) {}
  changeTheme() {
    this.themeService.setTheme(
      this.themeService.getTheme() === 'light' ? 'dark' : 'light'
    );
  }

  clickContact() {
    this.alertStatus = true;
    this.statusDetail = 'loading';
  }

  onClose() {
    this.statusDetail = 'init';
  }

  getWhatsappLink() {
    return `https://wa.me/${this.phoneNumber}`;
  }
}
