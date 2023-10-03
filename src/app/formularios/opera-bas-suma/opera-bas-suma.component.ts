import { Component } from '@angular/core';

@Component({
  selector: 'app-opera-bas-suma',
  templateUrl: './opera-bas-suma.component.html',
  styleUrls: ['./opera-bas-suma.component.css']
})
export class OperaBasSumaComponent {

num1:number=0;
num2:number=0;
res:number=0;

sumar(){
this.res=this.num1 + this.num2
}
}
