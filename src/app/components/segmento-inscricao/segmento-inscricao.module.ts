import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SegmentoInscricaoComponent } from './segmento-inscricao.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, HttpClientJsonpModule],
  declarations: [SegmentoInscricaoComponent],
  exports: [SegmentoInscricaoComponent],  

})
export class SegmentoInscricaoModule {}
