import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  src: string = '../assets/Logo_transp.png';
  mail: string = "fundacioninclusiontea@gmail.com";
  fono: string = "+56 9 6523 0127";

  constructor() { }

  ngOnInit() {
  }

}
