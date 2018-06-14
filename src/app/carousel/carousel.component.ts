import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})

export class CarouselComponent implements OnInit {
  imagen1 : "http://via.placeholder.com/800x300";

  images: Array<string>;

  constructor() {}

  ngOnInit() {

  }
}
