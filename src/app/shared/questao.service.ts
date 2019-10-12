import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    pergunta: new FormControl('',Validators.required),
    opcao_a: new FormControl(''),
    opcao_b: new FormControl(''),
    opcao_c: new FormControl(''),
    opcao_d: new FormControl(''),
    gabarito: new FormControl(''),
    tipo: new FormControl(''),
    ano_da_prova: new FormControl(''),
    numero_da_questao_na_prova: new FormControl(''),
    curso_id: new FormControl(''),
    professor_id: new FormControl(''),
  });

  initializeFormGroup(){
    this.form.setValue({
      $key: null,
      pergunta: '',
      opcao_a: '',
      opcao_b: '',
      opcao_c: '',
      opcao_d: '',
      gabarito: '',
      tipo: '',
      ano_da_prova: '',
      numero_da_questao_na_prova: '',
      curso_id: '',
      professor_id: '',
    });
  }

}
