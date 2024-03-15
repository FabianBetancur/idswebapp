import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '@guards/auth.guard';
import { redirectGuard } from '@guards/redirect.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [redirectGuard],
    loadChildren: () =>
      import('./modules/cms/cms.module').then((m) => m.CmsModule),
  },
  {
    path: 'cms',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./modules/cms/cms.module').then((m) => m.CmsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
