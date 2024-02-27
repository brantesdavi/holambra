import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DesafioItemComponent } from './desafio-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DesafioItemComponent],
  exports: [DesafioItemComponent],
})
export class DesafioItemModule {
}
