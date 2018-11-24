import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  src = 'assets/Logo_sinletras.png';
  mail = 'fundacioninclusiontea@gmail.com';
  fono = '+562 3247-4697';

  constructor() {
  }

  ngOnInit() {
  }

}
