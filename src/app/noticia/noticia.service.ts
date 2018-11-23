import {Injectable, EventEmitter} from '@angular/core';
import {Noticia} from './noticia.model';

@Injectable()
export class NoticiaService {
  public noticiaData: Noticia;
  noticiaSelected = new EventEmitter<Noticia>();
  resumen: Array<string> = [];
  completo: Array<string> = [];
  noticiasArray = [
    new Noticia('Colecta U. San Sebastián', 'En octubre se realizó un evento sobre inclusión en la sede de Santiago de la USS.', '../../assets/colecta_1.jpeg',
      'En el marco de la Feria de la Inclusión, organizada por la Universidad San Sebastián de Santiago, estuvimos entregando información sobre nuestro trabajo y las terapias que utilizamos con nuestros' +
      ' niños. Además, aprovechamos la instancia para recaudar fondos y poderseguir adelante con nuestro proyecto para que todos los niños de Puente Alto que necesiten de nuestras terapias, puedan acceder a' +
      ' ellas.', '../../assets/colecta_2.jpeg','2')
    , new Noticia('Entrevista Radio La Florida', 'Estuvimos en la radio conversando sobre nuestra labor en la comuna de Puente Alto.', '../../assets/Radio_1.jpeg',
      'El día 12 de noviembre de 2018 fuimos invitados por Radio La Florida a conversar sobre nuestra fundación. Estuvimos además difundiendo qué es el trastorno autista con la comunidad' +
      ' para incentivar a la gente a buscar ayuda especializada temprana.  ', '../../assets/Radio_1.jpeg', '1')
    , new Noticia('titulo 3', 'Texto resumen tarjeta 3', 'https://picsum.photos/350/200',
      'Este es el texto completo de la noticia 3,' +
      ' la verdad es que no sé que poner, per sí se que estaré muy, pero muy contanta si es que esto llegase a resultar. ' +
      'Es lo más difícil del sitio', 'https://picsum.photos/800/500','3')
  ];

  constructor() {
  }

  getNoticia(id: string) {
    // @ts-ignore
    return this.noticiasArray[id-1];
  }

}
