import { Injectable, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor() { }


  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    nome: new FormControl('', Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key1: null,
      nome1: '',
    });
  }
}
