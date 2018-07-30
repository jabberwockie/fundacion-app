import { Component, OnInit } from '@angular/core';
import {Router, RouterEvent} from '@angular/router';

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

  open: boolean;
  selected: any;
  router: Router;

  constructor() { }

  ngOnInit() {
  }

}
