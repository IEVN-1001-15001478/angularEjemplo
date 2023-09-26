import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {

  num1:string='';
  num2:string='';
  resultado:number=0;
 /*  calculo:string='';
  calculadora = document.querySelector('input[name="resultado"]:checked'); */


/*   sumar():void{
    this.resultado = parseInt(this.num1) + parseInt(this.num2);
  }
  restar():void{
    this.resultado = parseInt(this.num1) - parseInt(this.num2);
  }
  multiplicar():void{
    this.resultado = parseInt(this.num1) * parseInt(this.num2);
  }
  dividir():void{
    this.resultado = parseInt(this.num1) / parseInt(this.num2);
  }  */
  calcular(){
    if (document.querySelector('input[id="sumar"]:checked')) {
      this.resultado = parseInt(this.num1) + parseInt(this.num2)
    }
    if (document.querySelector('input[id="restar"]:checked')) {
      this.resultado = parseInt(this.num1) - parseInt(this.num2)
    }
    if (document.querySelector('input[id="multiplicar"]:checked')) {
      this.resultado = parseInt(this.num1) * parseInt(this.num2)
    } 
    if (document.querySelector('input[id="dividir"]:checked')) {
      this.resultado = parseInt(this.num1) / parseInt(this.num2)
    }  
  }
  
}