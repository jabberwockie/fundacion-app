import {Injectable} from '@angular/core';
import {Personal} from './personal.model';

@Injectable()
export class PersonalService {
  personalArray = [
    new Personal('Dominique Goretti', 'Muñoz Santelices', 'Psicopedagoga', 'Universidad Santo Tomás',
      'Directora', 'Co fundadora de Fundación Inclusión TEA. Lorem ipsum dolor sit amet, consecteur sdipiscing elit. ' +
      'Pellentesque eu dapibus nunc. Vestibulum venenatis sollicitudin purus, ac malesuada leo congue vel. ' +
      'Praesent congue a ligula quis quismod.', 'https://picsum.photos/300/300?image=39'),
    new Personal('Dominique Goretti', 'Muñoz Santelices', 'Psicopedagoga', 'Universidad Santo Tomás',
      'Directora', 'Co fundadora de Fundación Inclusión TEA. Lorem ipsum dolor sit amet, consecteur sdipiscing elit. ' +
      'Pellentesque eu dapibus nunc. Vestibulum venenatis sollicitudin purus, ac malesuada leo congue vel. ' +
      'Praesent congue a ligula quis quismod.', 'https://picsum.photos/300/300?image=49'),
    new Personal('Dominique Goretti', 'Muñoz Santelices', 'Psicopedagoga', 'Universidad Santo Tomás',
      'Directora', 'Co fundadora de Fundación Inclusión TEA. Lorem ipsum dolor sit amet, consecteur sdipiscing elit. ' +
      'Pellentesque eu dapibus nunc. Vestibulum venenatis sollicitudin purus, ac malesuada leo congue vel. ' +
      'Praesent congue a ligula quis quismod.', 'https://picsum.photos/300/300?image=59'),
  ];


  constructor() {
  }

  getNoticia(id: string) {
    // @ts-ignore
    return this.noticiasArray[id-1];
  }

}
