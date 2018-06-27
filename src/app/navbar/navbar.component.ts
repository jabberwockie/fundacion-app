import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  inicio = 'Inicio';
  quien = 'Quiénes Somos';
  proyecto = 'Nuestro Proyecto';
  contacto = 'Contacto';
  mision = 'Misión';
  nosotros = 'Sobre Nosotros';
  vision = 'Visión';

  constructor() { }

  ngOnInit() {
  }

}
