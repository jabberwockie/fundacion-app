import { Component, OnInit } from '@angular/core';
import {NoticiaService} from '../../noticia/noticia.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  // cards = [{titulo: 'titulo 1', texto_resumen: 'Texto tarjeta 1', imagen_resumen:'https://picsum.photos/350/200'},
  //   {titulo: 'titulo 2', texto_resumen: 'Texto tarjeta 2', imagen_resumen:'https://picsum.photos/350/200'},
  //   {titulo: 'titulo 3', texto_resumen: 'Texto tarjeta 3', imagen_resumen:'https://picsum.photos/350/200'}];

  constructor(private noticiaServ: NoticiaService) { }

  ngOnInit() {
  }

 cards = this.noticiaServ.resumen;


}
