import {Injectable} from '@angular/core';

@Injectable()
export class NoticiaService {
  resumen: Array<string> = [];
  completo: Array<string> = [];
  noticias = [{
    titulo: 'titulo 1',
    texto_resumen: 'Texto tarjeta 1',
    imagen_resumen: 'https://picsum.photos/350/200',
    texto_completo: 'Este es el texto completo de la noticia 1,' +
      ' la verdad es que no sé que poner, per sí se que estaré muy, pero muy contanta si es que esto llegase a resultar. ' +
      'Es lo más difícil del sitio',
    imagen_completo: 'https://picsum.photos/600/400'
  },
    {
      titulo: 'titulo 2',
      texto_resumen: 'Texto tarjeta 2',
      imagen_resumen: 'https://picsum.photos/350/200',
      texto_completo: 'Este es el texto completo de la noticia 2,' +
        ' la verdad es que no sé que poner, per sí se que estaré muy, pero muy contanta si es que esto llegase a resultar. ' +
        'Es lo más difícil del sitio',
      imagen_completo: 'https://picsum.photos/600/400'
    },
    {
      titulo: 'titulo 3',
      texto_resumen: 'Texto tarjeta 3',
      imagen_resumen: 'https://picsum.photos/350/200',
      texto_completo: 'Este es el texto completo de la noticia 3,' +
        ' la verdad es que no sé que poner, per sí se que estaré muy, pero muy contanta si es que esto llegase a resultar. ' +
        'Es lo más difícil del sitio',
      imagen_completo: 'https://picsum.photos/600/400'
    }
  ];

  constructor() {
  }

  getResumen() {
    for (let i = 0; i < this.noticias.length; i++) {
      this.resumen.push(this.noticias[i].titulo);
      this.resumen.push(this.noticias[i].texto_resumen);
      this.resumen.push(this.noticias[i].imagen_resumen);
    }
    console.log(this.resumen.toString());
    return this.resumen;
  }

  getCompleto(){
    for (let i = 0; i < this.noticias.length; i++) {
      this.completo.push(this.noticias[i].titulo);
      this.completo.push(this.noticias[i].texto_completo);
      this.completo.push(this.noticias[i].imagen_completo);
    }

    return this.completo;

  }

}
