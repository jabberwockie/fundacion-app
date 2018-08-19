import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuestro-proyecto',
  templateUrl: './nuestro-proyecto.component.html',
  styleUrls: ['./nuestro-proyecto.component.scss']
})
export class NuestroProyectoComponent implements OnInit {
  imagen = 'https://picsum.photos/600/400?image=10';
  constructor() { }

  ngOnInit() {
  }

}
