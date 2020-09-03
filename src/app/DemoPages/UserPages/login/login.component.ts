import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  recaptcha: any[];
  environment: string = environment.siteKey;
  usuario = {
    email: '',
    password: '',
    captcha: ''
  };
  slideConfig2 = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 500,
    dots: true,
  };

  constructor(private userLogin: LoginService, private route: Router) {
  }

  ngOnInit() {
  }
  ingresar(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach( respuesta => {
        respuesta.markAsTouched();
        });
      return;
    } else {

      Swal.fire({
        allowOutsideClick: false,
        icon: 'info',
        text: 'Espere por Favor...'
      });
      Swal.showLoading();
      this.userLogin.login( form.value ).subscribe(respuesta => {
      Swal.close();
      console.log(respuesta);
      localStorage.setItem('token', `Bearer ${respuesta.token}`);
      this.route.navigateByUrl('/material/table');
      }, (err) => {
        Swal.fire({
        icon: 'error',
        title: 'Error de autenticación'
    });
  });
  }
  }
  resolved( captchaResponse: any[] ) {
    this.recaptcha = captchaResponse;
  }

}
