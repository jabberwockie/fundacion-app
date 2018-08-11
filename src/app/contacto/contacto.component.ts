import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  mail = 'fundacioninclusiontea@gmail.com';
  fono = '+56 9 6540 2598';
  direccion = 'Una Dirección #123';
  datos_bancarios = 'Fundación Inclusión TEA\t' +
    'Banco Estado\n' +
    'Chequera Electrónica\n' +
    '26-9701-65541';
  intro = 'Queremos que seas parte de nuestro proyecto. ¡Ayúdanos a seguir adelante!';

  constructor() { }

  ngOnInit() {
  }

}
