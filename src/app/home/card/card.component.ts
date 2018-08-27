import {Component, OnDestroy, OnInit} from '@angular/core';
import {NoticiaService} from '../../noticia/noticia.service';
import {Input} from '@angular/core';
import {Noticia} from '../../noticia/noticia.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() noticias: Noticia;
  selectedNoticia: Noticia;

  cards = this.noticiaServ.noticiasArray;

  constructor(private noticiaServ: NoticiaService) {
  }

  ngOnInit() {
    this.noticiaServ.noticiaSelected.subscribe(
      (noticia: Noticia) => {this.selectedNoticia = noticia;}
    );
  }

}
