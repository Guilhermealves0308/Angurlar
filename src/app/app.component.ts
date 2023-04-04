import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'APP IDADE ';
  nome = '';
  dtnasc = '';
  idade = 0;
  dtatual = new Date();
  anonasc = '';

  calcular() {
    if
      (this.dtnasc == '') {
      alert('Espaço em Branco De Ser corrijido')
    }
    else {


      this.anonasc = this.dtnasc.substr(6.4);
      this.idade = this.dtatual.getFullYear() - parseInt(this.dtnasc);

    }
    return {

    }
  }
  limpar() {

    this.nome = '';
    this.dtnasc = '';
    this.idade = 0;
  }
  mascara_data(): void{
if(this.dtnasc.length == 2){
  this.dtnasc = this.dtnasc + '/';
}
  }
}
