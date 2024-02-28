import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CepService } from '../../services/cep.service';

@Component({
  selector: 'app-segmento-inscricao',
  templateUrl: './segmento-inscricao.component.html',
})

export class SegmentoInscricaoComponent  implements OnInit{
  formulario!: FormGroup;

  constructor(private cepService: CepService) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      sobrenome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required]),
      endereco: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      complemento: new FormControl('', [Validators.required]),
    });

    this.formulario?.get('cep')?.valueChanges.subscribe(cep => {
      const regex = /^[0-9]{8}$/;
      if (!regex.test(cep)) {
        this.formulario?.get('cep')?.setErrors({ 'cepInvalido': true });
        this.formulario?.get('bairro')?.setValue(''); // Limpa o campo bairro
      } 
      else{
        this.formulario?.get('cep')?.setErrors(null);
        if (cep) {
          this.cepService.buscarEndereco(cep).subscribe(
            e=> {
              this.formulario?.get('endereco')?.setValue(e.logradouro)
              this.formulario?.get('bairro')?.setValue(e.bairro)
            }
          )
        }

      }
    });
  }

  buscarEndereco(cep: string){
    this.cepService.buscarEndereco(cep).subscribe(
      e => console.log(e)
    )
  }

  

  

  onSubmit() {
    if (this.formulario.valid) {
      console.log("Inscrição OK");
    }
  }
}
