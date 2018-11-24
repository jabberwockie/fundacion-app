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
      ' ellas.', '../../assets/colecta_2.jpeg','1')
    , new Noticia('Entrevista Radio La Florida', 'Estuvimos en la radio conversando sobre nuestra labor en la comuna de Puente Alto.', '../../assets/Radio_1.jpeg',
      'El día 12 de noviembre de 2018 fuimos invitados por Radio La Florida a conversar sobre nuestra fundación. Estuvimos además difundiendo qué es el trastorno autista con la comunidad' +
      ' para incentivar a la gente a buscar ayuda especializada temprana.  ', '../../assets/Radio_1.jpeg', '2')
    , new Noticia('Feria UAI', 'Nos dimos a conocer en la Universidad Adolfo Ibáñez con nuestro proyecto y nuestras metodologías de trabajo.', '../../assets/UAI.jpeg',
      'Durante noviembre se llevó a cabo la Feria UAI, en donde fuimos invitados para dar a conocer nuestra labor. Parte de nuestro equipo fue a presentar a nuestra institución a los alumnos UAI ' +
      'y aprovechamos de dar a conocer nuestras metodologías de trabajo. Fue una excelente oportunidad para derribar mitos sobre el trastorno del espectro autista y acercar esta condición a la comunidad de estudiantes de la Universidad.',
      '../../assets/UAI.jpeg','3')
  ];

  constructor() {
  }

  getNoticia(id: string) {
    // @ts-ignore
    return this.noticiasArray[id-1];
  }

}
