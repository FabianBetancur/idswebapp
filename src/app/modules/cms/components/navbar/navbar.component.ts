import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';
import {
  faLightbulb as farLight,
  faCircleXmark,
} from '@fortawesome/free-regular-svg-icons';
import {
  faLightbulb as fasLight,
  faHome,
  faUser,
  faAt,
  faEnvelope,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';

import { RequestStatus } from '@models/request-status.model';
import { profileUser } from '@models/user.model';
import { EmailService } from '@services/email.service';

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
  faPaperPlane = faPaperPlane;
  faEnvelope = faEnvelope;
  faCircleXmark = faCircleXmark;
  message: string = '';
  statusDetail: RequestStatus = 'init';
  statusEmail: RequestStatus = 'init';
  statusEmailAlert: RequestStatus = 'init';
  phoneNumber: string = '573118874065';
  profileUser: profileUser[] = [];

  sendEmailForm = this.formBuilder.group({
    contentMessage: ['', Validators.required],
  });

  constructor(
    public themeService: ThemeService,
    private formBuilder: FormBuilder,
    private emailService: EmailService
  ) {}
  changeTheme() {
    this.themeService.setTheme(
      this.themeService.getTheme() === 'light' ? 'dark' : 'light'
    );
  }

  clickContact() {
    //this.alertStatus = true;
    this.statusDetail = 'loading';
  }

  onClose() {
    this.statusDetail = 'init';
  }

  getWhatsappLink() {
    return `https://wa.me/${this.phoneNumber}`;
  }

  sendMailAlert() {
    this.statusEmailAlert = 'loading';
  }
  sendMail() {
    if (this.sendEmailForm.valid) {
      this.statusEmail = 'loading';
      const content = this.sendEmailForm.get('contentMessage')?.getRawValue();
      //console.log(content);
      this.emailService.sendEmail(content).subscribe({
        next: (data) => {
          this.statusEmail = 'success';
          this.message = data.message;
          console.log(this.message);
          this.closeSendEmailAlertAfterDelay();
          this.sendEmailForm.reset();
        },
        error: (error) => {
          this.statusEmail = 'failed';
          this.message = error.message;
          console.error(this.message);
        },
      });
    } else {
      this.sendEmailForm.markAllAsTouched();
    }
  }
  onCloseSendEmail() {
    this.statusEmailAlert = 'init';
    this.statusEmail = 'init';
  }
  closeSendEmailAlertAfterDelay() {
    setTimeout(() => {
      this.onCloseSendEmail();
    }, 2000);
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
