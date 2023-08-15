import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../services/fake-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = []; 
  showPast: boolean = false; // Yeni ekledik
  searchKeyword: string = ''; // Kullanıcının girdiği arama kelimesini tutacak değişken
  
  constructor(private fakeApiService: FakeApiService, private router: Router) {}

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.fakeApiService.getProducts().subscribe(
      (data) => {
        this.products = data;
        this.filteredProducts = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  filterByCategory(category: string) {
    if (category === 'Tümü') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter((product) => product.category === category);
    }
  }
  onCardClick(eventId: number) {
    this.router.navigate(['/product-detail', eventId]); // Yeni ürün detay sayfası yoluna yönlendir
  }  
  showPastEvents() {
    this.showPast = true; // Geçmiş etkinlikleri gösterme durumunu true yap
    const currentDate = new Date();
    this.filteredProducts = this.products.filter(product => new Date(product.date) < currentDate);
  }
  formatDateTimeTurkish(dateTime: string): string {
    const eventDateTime = new Date(dateTime);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    };
    return eventDateTime.toLocaleDateString('tr-TR', options);
  }
 





}
  
