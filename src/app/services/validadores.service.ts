import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  passwordsIguales(pass1Name: string, pass2Name: string) {
    return (form: FormGroup) => {
        const passw1Control = form.controls[pass1Name];
        const passw2Control = form.controls[pass2Name];

        if( passw1Control.value === passw2Control.value ) {
          passw2Control.setErrors(null);
        } else {
          passw2Control.setErrors({ noEsigual: true});
        }
    };
  }
}
