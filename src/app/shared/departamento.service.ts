import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    sigla: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    nome: new FormControl('', Validators.required),
    localizacao: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      key: null,
      sigla: '',
      nome: '',
      localizacao: '',
    });
  }

}
