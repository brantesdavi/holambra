import { Component, Input } from '@angular/core';
import { Evento } from '../../../models/evento.model';

@Component({
  selector: 'app-cronograma-item',
  templateUrl: './cronograma-item.component.html',
})
export class CronogramaItemComponent {

  @Input() evento: Evento = {
    titulo: '',
    data: ''
  }
}
