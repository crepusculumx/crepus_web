import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { ToolBoxRoutingModule } from './tool-box-routing.module';
import { NumberSystemConversionComponent } from './number-system-conversion/number-system-conversion.component';

@NgModule({
  declarations: [NumberSystemConversionComponent],
  imports: [CommonModule, SharedModule, ToolBoxRoutingModule],
})
export class ToolBoxModule {}
