import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBasicComponent } from '../layout/basic/basic.component';
import { ToolBoxModule } from './tool-box/tool-box.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutBasicComponent,
    children: [
      { path: '', redirectTo: 'tool-box', pathMatch: 'full' },
      {
        path: 'tool-box',
        loadChildren: () =>
          import('./tool-box/tool-box.module').then((m) => m.ToolBoxModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'top',
    }),
    ToolBoxModule,
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
