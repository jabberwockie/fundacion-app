import {Component, OnInit} from '@angular/core';
import {PersonalService} from './personal.service';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.scss']
})
export class SobreNosotrosComponent implements OnInit {
  personal = this.personalServ.personalArray;
  titulo = 'Sobre Nosotros';
  
  constructor(private personalServ: PersonalService) {
  }

  ngOnInit() {
  }

}
