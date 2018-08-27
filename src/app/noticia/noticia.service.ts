import {Injectable, EventEmitter} from '@angular/core';
import {Noticia} from './noticia.model';

@Injectable()
export class NoticiaService {
  public noticiaData: Noticia;
  noticiaSelected = new EventEmitter<Noticia>();
  resumen: Array<string> = [];
  completo: Array<string> = [];
  noticiasArray = [
    new Noticia('titulo 1', 'Texto resumen tarjeta 1', 'https://picsum.photos/350/200',
      'Este es el texto completo de la noticia 1,' +
      ' la verdad es que no sé que poner, per sí se que estaré muy, pero muy contanta si es que esto llegase a resultar. ' +
      'Es lo más difícil del sitio', 'https://picsum.photos/800/500', '1')
    ,
    new Noticia('titulo 2', 'Texto resumen tarjeta 2', 'https://picsum.photos/350/200',
      'Este es el texto completo de la noticia 2,' +
      ' la verdad es que no sé que poner, per sí se que estaré muy, pero muy contanta si es que esto llegase a resultar. ' +
      'Es lo más difícil del sitio', 'https://picsum.photos/800/500','2')
    ,
    new Noticia('titulo 3', 'Texto resumen tarjeta 3', 'https://picsum.photos/350/200',
      'Este es el texto completo de la noticia 3,' +
      ' la verdad es que no sé que poner, per sí se que estaré muy, pero muy contanta si es que esto llegase a resultar. ' +
      'Es lo más difícil del sitio', 'https://picsum.photos/800/500','3')
  ];

  constructor() {
  }

  getNoticia(id: string) {
    return this.noticiasArray[id-1];
  }

}
