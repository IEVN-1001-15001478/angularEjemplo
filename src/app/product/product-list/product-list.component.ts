import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
product:any[]=[
  {
    "productoID":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas familiar",
    "Year":"Febrero 3 2020",
    "Precio":120000,
    "Marca":"NISSAN",
    "Color":"Rojo",
    "ImagenUrl":"Datos pendientes"
  },
  {
    "productoID":2,
    "Modelo":"A4",
    "Descripcion":"4 puertas familiar",
    "Year":"Febrero 3 2021",
    "Precio":200000,
    "Marca":"NISSAN",
    "Color":"Azul",
    "ImagenUrl":"Datos pendientes"
  },
  {
    "productoID":3,
    "Modelo":"Rio",
    "Descripcion":"2 puertas familiar",
    "Year":"Marzo 5 2022",
    "Precio":150000,
    "Marca":"KIA",
    "Color":"Blanco",
    "ImagenUrl":"Datos pendientes"
  },
  {
    "productoID":4,
    "Modelo":"Suburban",
    "Descripcion":"2 puertas, con media cabina",
    "Year":"Enero 1 2023",
    "Precio":250000,
    "Marca":"Chevrolet",
    "Color":"Negra",
    "ImagenUrl":"Datos pendientes"
  },
]

}
