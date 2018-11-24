import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  titulo = '¡Hablemos!';
  mail = 'fundacioninclusiontea@gmail.com';
  fono = '+562 3247 - 4697';
  direccion = 'El Maitén #0237, Puente Alto';
  intro = 'Queremos que seas parte de nuestro proyecto y que juntos hagamos realidad la inclusión. ¡Ayúdanos a seguir adelante!';
  sub_titulo = 'Ayuda nuestra causa';

  constructor() { }

  ngOnInit() {
  }

}
