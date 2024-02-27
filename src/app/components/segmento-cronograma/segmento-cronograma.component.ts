import { Component } from '@angular/core';
import { Evento } from '../../models/evento.model';

@Component({
  selector: 'app-segmento-cronograma',
  templateUrl: './segmento-cronograma.component.html',
})
export class SegmentoCronogramaComponent {
  cronograma: Evento[] = [
    {titulo: "Lançamento e palestra", data: "19/04"},
    {titulo: "Inscrições", data: "De 19/4 a 19/5"},
    {titulo: "Pitch Day e seleção das propostas para a segunda etapa", data: "7/6"},
    {titulo: "Divulgação das propostas selecionadas", data: "12/6"},
    {titulo: "Mentorias e desenvolvimento das iniciativas", data: "A partir de 14/6"},
    {titulo: "Visita técnica", data: "28/6"},
    {titulo: "Pitch Day final, divulgação do ranking e evento de premiação", data: "30/8"},
  ]
}
