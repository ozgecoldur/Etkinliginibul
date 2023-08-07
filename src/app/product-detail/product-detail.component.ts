import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeApiService } from '../services/fake-api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any; // ProductDetailComponent sınıfında product özelliği tanımlandı.

  constructor(private route: ActivatedRoute, private fakeApiService: FakeApiService) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.getProductDetail(productId);
  }

  getProductDetail(productId: string) {
    this.fakeApiService.getEventById(Number(productId)).subscribe(
      (data) => {
        this.product = data; // Ürün bilgileri alındığında product özelliğine atama yapılır.
      },
      (error) => {
        console.log('Error fetching product details:', error);
      }
    );
  }
  
}
  

