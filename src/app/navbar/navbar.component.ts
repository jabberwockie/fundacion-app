import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  inicio = 'Inicio';
  quien = 'Quienes Somos';
  proyecto = 'Nuestro Proyecto';
  contacto = 'Contacto';
  mision = 'Mision';
  vision = 'Vision';

  constructor() { }

  ngOnInit() {
  }

}
