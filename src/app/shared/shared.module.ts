import { NgModule, Type } from '@angular/core';

import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

const THIRD_MODULES: Array<Type<void>> = [];

const COMPONENTS: Array<Type<void>> = [];

@NgModule({
  imports: [...SHARED_ZORRO_MODULES, ...THIRD_MODULES],
  declarations: [...COMPONENTS],
  exports: [...SHARED_ZORRO_MODULES, ...THIRD_MODULES, ...COMPONENTS],
})
export class SharedModule {}
