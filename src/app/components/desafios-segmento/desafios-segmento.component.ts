import { Component } from '@angular/core';
import { Desafio } from '../../models/desafio.models';

@Component({
  selector: 'app-desafios-segmento',
  templateUrl: './desafios-segmento.component.html',
})
export class DesafiosSegmentoComponent {

  desafios: Desafio[] = [
    {
      icon: "",
      title: "",
      textList: [
        "-> Tecnologias e automação de sistemas irrigados por meio de soluções que visam melhorar a eficiência e eficácia na utilização dos recursos hídricos.",
        "-> Novas tecnologias relacionadas ao tema deste item."
      ]
    },    
    {
      icon: "",
      title: "",
      textList: [
        "-> Sistemas e/ou novas tecnologias que contribuam para a melhoria da detecção e monitoramento de pragas e doenças, utilizando ou não, inteligência preditiva."
      ]
    },
    {
      icon: "",
      title: "",
      textList: [
        "-> Desenvolvimento de bioinsumos de eficiência aumentada para o incremento da produção, da qualidade da produção e/ou proteção de plantas contra estresses bióticos e abióticos, tais como agentes de controle biológico; bioestimulantes; biofertilizantes; condicionadores de ambientes; entre outros."
      ]
    },
    {
      icon: "",
      title: "",
      textList: [
        "-> Interações entre máquina-solo-planta que busquem sistemas produtivos mais eficientes.",
        "-> Soluções que contribuam para a otimização e melhoria no sistema de colheita de feijão.",
        "-> Novas tecnologias relacionadas ao tema deste item."
      ]
    }
  ]
}
