import { Component, Input, OnInit } from '@angular/core';
import { Desafio } from '../../../models/desafio.models';

@Component({
  selector: 'app-desafio-item',
  templateUrl: './desafio-item.component.html',
})
export class DesafioItemComponent{
  
  
  @Input()
  desafio: Desafio = {
    icon: "",
      title: "",
      textList: [
        ""
      ]
    };
  
}
