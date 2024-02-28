import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CepService } from '../../services/cep.service';
import { IbgeService } from '../../services/ibge.service';
import { telefoneValidator } from '../../services/validators';

@Component({
  selector: 'app-segmento-inscricao',
  templateUrl: './segmento-inscricao.component.html',  
  styleUrls: ['./segmento-inscricao.component.sass']
})

export class SegmentoInscricaoComponent  implements OnInit{
  formulario!: FormGroup;

  cidade: string = '';
  estado: string = '';

  constructor(private cepService: CepService, private ibgeService: IbgeService) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      nome: new FormControl('', Validators.required),
      sobrenome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', [Validators.required, telefoneValidator]), 
      cep: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required),
      bairro: new FormControl('', Validators.required),
      complemento: new FormControl(''),
      estado: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required)
    });

    this.formulario.get('cep')?.valueChanges.subscribe(cep => {
      this.preencheCamposCep(cep);
    });
    
  }

  preencheCamposCep(cep: string) {
    const regex = /^[0-9]{8}$/;
    if (!regex.test(cep)) {
      this.formulario.get('cep')?.setErrors({ 'cepInvalido': true });
      this.formulario.get('bairro')?.setValue('');
    } else {
      if (cep) {
        this.cepService.buscarEndereco(cep).subscribe(
          e => {
            this.formulario.get('endereco')?.setValue(e.logradouro);
            this.formulario.get('bairro')?.setValue(e.bairro);
            this.formulario.get('cidade')?.setValue(e.localidade);
            this.formulario.get('estado')?.setValue(e.uf);
            this.formulario.get('complemento')?.setValue(e.complemento);
          }
        );
      }
    }
  }

  onSubmit() {
    const regex = /^[0-9]{11}$/;
    if (this.formulario.valid) {
      alert(this.formulario.value);
    }
  }
}
