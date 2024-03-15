import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { CmsRoutingModule } from './cms-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '@shared/shared.module';
import { MenusComponent } from './pages/menus/menus.component';
import { TablesComponent } from './pages/tables/tables.component';
import { LayoutsComponent } from './pages/layouts/layouts.component';
import { MenuAComponent } from './components/menu-a/menu-a.component';
import { MenuBComponent } from './components/menu-b/menu-b.component';
import { MenuCComponent } from './components/menu-c/menu-c.component';
import { TableAComponent } from './components/table-a/table-a.component';
import { TableBComponent } from './components/table-b/table-b.component';
import { TableCComponent } from './components/table-c/table-c.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CardAComponent } from './components/card-a/card-a.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardBComponent } from './components/card-b/card-b.component';
import { LayoutAComponent } from './components/layout-a/layout-a.component';
import { LayoutBComponent } from './components/layout-b/layout-b.component';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    MenusComponent,
    TablesComponent,
    CardsComponent,
    LayoutsComponent,
    MenuAComponent,
    MenuBComponent,
    MenuCComponent,
    TableAComponent,
    TableBComponent,
    TableCComponent,
    CardAComponent,
    NavbarComponent,
    CardBComponent,
    LayoutAComponent,
    LayoutBComponent,
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    CmsRoutingModule,
    FontAwesomeModule,
    CdkTableModule,
  ],
})
export class CmsModule {}
