import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CronogramaItemComponent } from './cronograma-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CronogramaItemComponent],
  exports: [CronogramaItemComponent],
})
export class CronogramaItemModule {}
