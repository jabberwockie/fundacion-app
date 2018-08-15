import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cards = [{titulo: 'titulo 1', texto: 'Texto tarjeta 1', imagen:'https://picsum.photos/350/200'},
    {titulo: 'titulo 2', texto: 'Texto tarjeta 2', imagen:'https://picsum.photos/350/200'},
    {titulo: 'titulo 3', texto: 'Texto tarjeta 3', imagen:'https://picsum.photos/350/200'}];

  constructor() { }

  ngOnInit() {
  }

}
