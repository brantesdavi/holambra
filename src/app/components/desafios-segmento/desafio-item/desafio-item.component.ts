import { Component, Input, OnInit } from '@angular/core';
import { Desafio } from '../../../models/desafio.models';

@Component({
  selector: 'app-desafio-item',
  templateUrl: './desafio-item.component.html',
})
export class DesafioItemComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.desafio.icon)
  }
  
  @Input()
  desafio: Desafio = {
    icon: "",
      title: "",
      textList: [
        ""
      ]
    };
  
}
