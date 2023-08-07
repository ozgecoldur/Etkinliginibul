import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  private apiUrl = 'assets/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((response: any) => response)
    );
  }

  // getEventById(eventId: number): Observable<any> {
  //   // Burada etkinlikleri getiren API çağrısını gerçekleştirebilirsiniz.
  //   // Örneğin:
  //   // return this.http.get<any>(`https://example-api.com/events/${eventId}`);
  //   // Şu anlık fake bir veriyi döndürelim:
  //   return of({
  //     "id": 2,
  //     "name": "GÜLŞEN",
  //     "location": "Harbiye",
  //     "price": "100.00 TL",
  //     "imageSrc": "assets/images/gulsen.jpg",
  //     "category": "stand-up",
  //     "tarih": "2023-02-02"
  //   });
  // }

  getEventById(eventId: number): Observable<any> {
    // JSON dosyasının yolu
    const url = `assets/products.json`;

    // HttpClient ile JSON dosyasını okuyarak verileri alıyoruz
    return this.http.get<any>(url).pipe(
      map(events => events.find(event => event.id === eventId))
    );
  }
}
