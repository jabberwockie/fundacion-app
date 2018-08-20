import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  titulo = '¡Hablemos!';
  mail = 'fundacioninclusiontea@gmail.com';
  fono = '+56 9 6540 2598';
  direccion = 'Una Dirección #123';
  intro = 'Queremos que seas parte de nuestro proyecto y que juntos hagamos realidad la inclusión. ¡Ayúdanos a seguir adelante!';
  sub_titulo = 'Ayuda nuestra causa';

  constructor() { }

  ngOnInit() {
  }

}
