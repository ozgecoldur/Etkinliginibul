import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  title = 'EtkinliginiBul'; // Define the 'title' property here
  slideIndex = 1;
  ngAfterViewInit() {
    this.showSlides(this.slideIndex);
  }
  ngOnInit() {
    // Burada diğer işlemleri gerçekleştirin
  }
  slides = [
    { image: '/assets/images/resim3.jpg' },
    { image: 'assets/images/resim1.png' },
    { image: 'assets/images/hayal-kahvesi-aqua-florya-61023.jpg' },
  ];
  plusSlides(n: number) {
    this.showSlides((this.slideIndex += n));
  }

  currentSlide(n: number) {
    this.showSlides((this.slideIndex = n));
  }

  showSlides(n: number) {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].setAttribute('style', 'display: none;');
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }
    slides[this.slideIndex - 1].setAttribute('style', 'display: block;');
  }
}
