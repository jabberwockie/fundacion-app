import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mision',
  templateUrl: './mision.component.html',
  styleUrls: ['./mision.component.scss']
})
export class MisionComponent implements OnInit {
  titulo = 'Misión';
  imagen = 'https://picsum.photos/600/400?image=19';
  texto = 'Nuestra fundación fue creada con la intención de dignificar a los niños y niñas del país que poseen un\n' +
    '          trastorno\n' +
    '          del espectro autista en su primera infancia.\n' +
    '          Creamos un jardín infantil para niños de 2 a 5 años de edad, con la idea de realizar inclusión social para\n' +
    '          nuestros niños, junto a ello tenían la oportunidad de educarse de igual forma que sus compañeros y a la vez\n' +
    '          tener\n' +
    '          la opción de lograr incluirse en nuestro sistema a través de terapias ocupacionales y fonoaudiológicas.\n' +


    '          Nuestro sueño es seguir creciendo y formar escuelas y colegios de inclusión, para brindar esta oportunidad a\n' +
    '          todos los niños del país que posean esta especial condición.';

  constructor() {
  }

  ngOnInit() {
  }

}
