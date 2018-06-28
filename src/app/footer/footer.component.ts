import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  titles: Array<string> = ['Links', 'Redes Sociales', '¡Contáctanos!'];
  links: Array<string> = ['Link Uno', 'Link Dos', 'Link 3'];
  contacto: Array<string> = ['+56 9 1234 6548', 'fundacion@fundacion.cl', 'Una Dirección #1234'];
  facebook = 'https://facebook.com';
  twitter = 'https://www.twitter.com';
  src = './assets/Logo_sinletras.png';


  constructor() { }

  ngOnInit() {
  }

}
