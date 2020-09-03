import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ValidadoresService } from 'src/app/services/validadores.service' ;
import { UsuarioModel } from 'src/app/models/usuario.model';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { V } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  forma: FormGroup;
  slideConfig2 = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 500,
    dots: false,
  };

  constructor(private userLogin: LoginService, private route: Router, private fb: FormBuilder, private validadores: ValidadoresService) {
    this.crearFormulario();
  }

  ngOnInit() {
  }
  get emailNoValido() {
    return this.forma.get('email').invalid && this.forma.get('email').touched;
  }
  get nombreNoValido() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }
  get pass1Novalido() {
    return this.forma.get('password').invalid && this.forma.get('password').touched;
  }
  get pass2Novalido() {
    return this.forma.get('password2').invalid && this.forma.get('password2').touched;
  }
  get passw2NoValido() {
    const pass1 = this.forma.get('password').value;
    const pass2 = this.forma.get('password2').value;
    return (pass1 === pass2) ? false : true;
  }
  crearFormulario() {
    this.forma = this.fb.group({
      email     : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      nombre    : ['', Validators.required],
      password  : ['', Validators.required],
      password2 : ['', Validators.required],
    }, {
      validators: this.validadores.passwordsIguales('password', 'password2')
    });
  }
createUser() {
  console.log(this.forma.value);
  if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach( respuesta => {
      respuesta.markAsTouched();
      });
  } else {

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por Favor...'
    });
    Swal.showLoading();
    this.userLogin.createUser( this.forma.value ).subscribe(respuesta => {
    Swal.close();
    if (respuesta.ok == false) {
      Swal.fire({
      icon: 'error',
      title: `${respuesta.message}`
  });
      // this.route.navigateByUrl('/tables/bootstrap');
  } else {
      console.log(respuesta.message);
      this.route.navigateByUrl('/pages/login');
  }
    }, (err) => {
      Swal.fire({
      icon: 'error',
      title: 'Error de creación'
  });
});
}
}
}
