import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { OptionNavComponent } from './components/option-nav/option-nav.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { AlertComponent } from './components/alert/alert.component';
import { BtnNavComponent } from './components/btn-nav/btn-nav.component';
import { BtnSubmitComponent } from './components/btn-submit/btn-submit.component';

@NgModule({
  declarations: [
    OptionNavComponent,
    FooterComponent,
    CustomTableComponent,
    AlertComponent,
    BtnNavComponent,
    BtnSubmitComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule, CdkTableModule],
  exports: [
    OptionNavComponent,
    FooterComponent,
    CustomTableComponent,
    AlertComponent,
    BtnNavComponent,
    BtnSubmitComponent,
  ],
})
export class SharedModule {}
