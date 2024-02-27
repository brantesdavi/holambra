import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HeaderModule } from '../../components/header/header.module';
import { DesafiosSegmentoModule } from '../../components/desafios-segmento/desafios-segmento.module';

@NgModule({
  imports: [CommonModule, HeaderModule, DesafiosSegmentoModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
