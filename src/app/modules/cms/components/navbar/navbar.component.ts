import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';
import { AuthService } from '@services/auth.service';
import { faLightbulb as farLight } from '@fortawesome/free-regular-svg-icons';
import {
  faLightbulb as fasLight,
  faHome,
  faUser,
  faAt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';

import { RequestStatus } from '@models/request-status.model';
import { UsersService } from '@services/users.service';
import { profileUser } from '@models/user.model';

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
  profileUser: profileUser[] = [];

  sendEmailForm = this.formBuilder.group({
    contentMessage: ['', Validators.required],
  });

  constructor(
    public themeService: ThemeService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private usersService: UsersService
  ) {}
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
  //////////////////////////////////////////////
  /*
  login() {
    const email = 'mail@mail.com';
    const password = '12345678';

    this.authService.login(email, password).subscribe({
      next: (data) => {
        //console.log(data);
        this.usersService.getUsers().subscribe({
          next: (data) => {
            this.profileUser = data;
            console.log(this.profileUser);
          },
          error: (error) => {
            console.error(error.error);
          },
        });
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  */
  //////////////////////////////////////////////
}
