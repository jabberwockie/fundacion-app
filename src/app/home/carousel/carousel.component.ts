import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {
  images: Array<string> = ['../../assets/banner_4.jpeg', '../../assets/banner_2.jpeg',
    '../../assets/banner_5.jpeg'];
  title: Array<string> = ['Terapia Personalizada', 'Sesiones Multidisciplinarias', '¡Al Aire Libre!'];
  texts: Array<string> = ['Cada niño es único y nosotros le damos terapia de acuerdo a sus necesidades',
    'Fonoaudiología - Terapia Ocupacional - Ed. Parvularia',
    'Por que siempre es rico disfrutar de la naturaleza y las áreas verdes como parte de la terapia'];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = true;
  }

  ngOnInit() {

  }


}
