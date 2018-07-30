import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {
  images: Array<string> = ['https://picsum.photos/1200/300?image=10', 'https://picsum.photos/1200/300?image=30',
    'https://picsum.photos/1200/300?image=51'];
  title: Array<string> = ['First Slide', 'Second Slide', 'Third Slide'];
  texts: Array<string> = ['Nulla vitae elit libero, a pharetra augue mollis interdum.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = true;
  }

  ngOnInit() {

  }


}
