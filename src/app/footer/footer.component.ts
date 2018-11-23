import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  titles: Array<string> = ['Links de Interés', 'Redes Sociales', '¡Contáctanos!'];
  links: Array<string> = ['Link Uno', 'Link Dos', 'Link 3'];
  contacto: Array<string> = ['+562 3247-4697', 'fundacioninclusiontea@gmail.com', 'El Maitén 0237, Pte Alto'];
  facebook = 'https://facebook.com';
  twitter = 'https://www.twitter.com';
  src = './assets/Logo_sinletras.png';


  constructor() { }

  ngOnInit() {
  }

}
