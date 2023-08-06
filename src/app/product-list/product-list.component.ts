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
    this.filteredProducts = this.products.filter((product) => product.category === category);
  }

  onCardClick(eventId: number) {
    this.router.navigate(['/event-detail', eventId]);
  }

}
