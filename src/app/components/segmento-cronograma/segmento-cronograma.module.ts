import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SegmentoCronogramaComponent } from './segmento-cronograma.component';
import { CronogramaItemModule } from './cronograma-item/cronograma-item.module';

@NgModule({
  imports: [CommonModule, CronogramaItemModule],
  declarations: [SegmentoCronogramaComponent],
  exports: [SegmentoCronogramaComponent],
})
export class SegmentoCronogramaModule {}
