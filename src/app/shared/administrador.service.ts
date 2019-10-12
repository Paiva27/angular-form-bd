import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor() { 
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    nome: new FormControl('', Validators.required),
    sobrenome: new FormControl('', Validators.required),
    gender: new FormControl('1'),
    celular: new FormControl('', [Validators.required, Validators.minLength(12)]),
    telefone: new FormControl('', Validators.minLength(11)),
    cidade: new FormControl(''),
    estado: new FormControl(''),
    bairro: new FormControl(''),
    logradouro: new FormControl(''),
    complemento: new FormControl(''),
    numero: new FormControl(''),
    department: new FormControl(0),
    data_nascimento: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),

    //Funcionario
    data_admissao: new FormControl(''),
    titulacao: new FormControl(''),
    
  });
  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      data_nascimento: '',
    });
  }
 
}
