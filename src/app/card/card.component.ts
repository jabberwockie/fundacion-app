import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  images: Array<string> = ['https://picsum.photos/350/200', 'https://picsum.photos/350/200', 'https://picsum.photos/350/3¿200'];

  constructor() { }

  ngOnInit() {
  }

}
