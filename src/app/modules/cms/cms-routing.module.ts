import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { MenusComponent } from './pages/menus/menus.component';
import { TablesComponent } from './pages/tables/tables.component';
import { CardsComponent } from './pages/cards/cards.component';
import { LayoutsComponent } from './pages/layouts/layouts.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'menus',
        component: MenusComponent,
      },
      {
        path: 'tables',
        component: TablesComponent,
      },
      {
        path: 'cards',
        component: CardsComponent,
      },
      {
        path: 'layouts',
        component: LayoutsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmsRoutingModule {}
