import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/cms/cms.module').then((m) => m.CmsModule),
  },
  {
    path: 'cms',
    loadChildren: () =>
      import('./modules/cms/cms.module').then((m) => m.CmsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
