import {Injectable} from '@angular/core';
import {Personal} from './personal.model';

@Injectable()
export class PersonalService {
  personalArray = [
    new Personal('Dominique Goretti', 'Muñoz Venegas', 'Certificada en Cuidados de Enfermería', 'Centro de Formación Técnica Santo Tomás',
      'Presidenta', 'Fundadora de la fundación. Soñadora con gran vocación de servicio al prójimo.' +
      ' Creadora del proyecto "Jardín Infantil Mi Mundo" en Puente Alto, iniciativa de alto impacto social y de gran valor emocional.'
      , 'https://picsum.photos/300/300?image=39'),
    new Personal('Catherine Fabiola', 'Venegas Núñez', 'Certificada en Asistencia en Recursos Humanos', 'Universidad Católica de Chile',
      'Directora Área Administrativa', 'Co fundadora de Fundación Inclusión TEA. Lorem ipsum dolor sit amet, consecteur sdipiscing elit. ' +
      'Pellentesque eu dapibus nunc. Vestibulum venenatis sollicitudin purus, ac malesuada leo congue vel. ' +
      'Praesent congue a ligula quis quismod.', 'https://picsum.photos/300/300?image=49'),
    new Personal('Carol Paz', 'Díaz Álvarez', 'Fonoaudióloga', 'Universidad Mayor',
      'Directora Área Fonoaudiología', 'Co fundadora de Fundación Inclusión TEA. Lorem ipsum dolor sit amet, consecteur sdipiscing elit. ' +
      'Pellentesque eu dapibus nunc. Vestibulum venenatis sollicitudin purus, ac malesuada leo congue vel. ' +
      'Praesent congue a ligula quis quismod.', 'https://picsum.photos/300/300?image=59'),
    new Personal('Vanessa del Pilar', 'Herrera', 'Fonoaudióloga', 'Universidad Santo Tomás',
      'Directora Área Multidisciplinaria', ' Lorem ipsum dolor sit amet, consecteur sdipiscing elit. ' +
      'Pellentesque eu dapibus nunc. Vestibulum venenatis sollicitudin purus, ac malesuada leo congue vel. ' +
      'Praesent congue a ligula quis quismod.', 'https://picsum.photos/300/300?image=39'),
    new Personal('Silvia', 'Reyes Valladolid', 'Educadora de Párvulos', 'Universidad Santo Tomás',
      'Directora Área Educación', ' Lorem ipsum dolor sit amet, consecteur sdipiscing elit. ' +
      'Pellentesque eu dapibus nunc. Vestibulum venenatis sollicitudin purus, ac malesuada leo congue vel. ' +
      'Praesent congue a ligula quis quismod.', 'https://picsum.photos/300/300?image=39'),
  ];


  constructor() {
  }

}
