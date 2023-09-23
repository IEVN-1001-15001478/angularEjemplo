import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //directovas ngif

  imageWidth:number=80;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string=' ';

  showImage():void{
    this.muestraImg=!this.muestraImg
  }

product:IProductos[]=[
  {
    "productoID":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas familiar",
    "Year":"Febrero 3 2020",
    "Precio":120000,
    "Marca":"NISSAN",
    "Color":"Rojo",
    "ImagenUrl":"https://www.nissanframework.com/resourcefiles/g-vehicle-detail-versions-images/versiones-exclusive-cvt-nissan-sentra.jpg"
  },
  {
    "productoID":2,
    "Modelo":"A4",
    "Descripcion":"4 puertas familiar",
    "Year":"Febrero 3 2021",
    "Precio":200000,
    "Marca":"AUDI",
    "Color":"Azul",
    "ImagenUrl":"https://cloudflarestockimages.dealereprocess.com/resrc/images/stockphoto_asset-c_limit,f_auto,fl_lossy/v1/svp/Colors_PNG1280/2016/16audi/16audia4premiumsa4fa/audi_16a4premiumsa4fa_angularfront_scubabluemetallic"
  },
  {
    "productoID":3,
    "Modelo":"Rio",
    "Descripcion":"2 puertas familiar",
    "Year":"Marzo 5 2022",
    "Precio":150000,
    "Marca":"KIA",
    "Color":"Blanco",
    "ImagenUrl":"https://kia-coacalco.com.mx/img/autos/KISE23/Colores/Snow_White_Pearl_Ex.png"
  },
  {
    "productoID":4,
    "Modelo":"Suburban",
    "Descripcion":"2 puertas familiar",
    "Year":"Enero 1 2023",
    "Precio":250000,
    "Marca":"Chevrolet",
    "Color":"Negra",
    "ImagenUrl":"https://www.pmitour.com/wp-content/uploads/2022/05/suv-suburban-transporte-corporativo-vip.png"
  },
]

}
