import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'EtkinliginiBul';
  slides = [
    { image: 'assets/images/doga.webp', link: 'a' },
    { image: 'assets/images/resim1.png', link: 'b'  },
    { image: 'assets/images/resim2.png', link: 'c'  }
  ];

  activeSlideIndex = 0;

  prevSlide() {
    this.activeSlideIndex = (this.activeSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
  }
}
