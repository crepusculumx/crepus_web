import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberSystemConversionComponent } from './number-system-conversion/number-system-conversion.component';

const routes: Routes = [
  { path: '', redirectTo: 'number-system-conversion', pathMatch: 'full' },
  {
    path: 'number-system-conversion',
    component: NumberSystemConversionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolBoxRoutingModule {}
