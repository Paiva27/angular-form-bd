import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    nome: new FormControl('',Validators.required),
    codigo: new FormControl('',[Validators.required,Validators.maxLength(11)]),
    departamento_id: new FormControl('',[Validators.required,Validators.maxLength(11)]),
    area_id: new FormControl(''),
  });

  initializeFormGroup(){
    this.form.setValue({
    key: null,
    nome: '',
    codigo: '',
    departamento_id: '',
    area_id:''
    });
  }

}
