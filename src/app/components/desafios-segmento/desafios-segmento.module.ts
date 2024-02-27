import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DesafiosSegmentoComponent } from './desafios-segmento.component';
import { DesafioItemModule } from './desafio-item/desafio-item.module';

@NgModule({
  imports: [CommonModule, DesafioItemModule],
  declarations: [DesafiosSegmentoComponent],
  exports: [DesafiosSegmentoComponent],
})
export class DesafiosSegmentoModule {}
