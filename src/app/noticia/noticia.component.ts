import {Component, Input, OnInit} from '@angular/core';
import {NoticiaService} from './noticia.service';
import {Noticia} from './noticia.model';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
  providers: [NoticiaService]
})
export class NoticiaComponent implements OnInit {
  noticia$: Noticia;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noticiaServ: NoticiaService) {
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.noticia$ = this.noticiaServ.getNoticia(id);
  }

  goBack() {
    this.router.navigate(['']);
  }

}
