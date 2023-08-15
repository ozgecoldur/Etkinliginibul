import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((response: any) => response)
    );
  }
  
  private apiUrl = 'assets/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((response: any) => response)
    );
  }

  getEventById(eventId: number): Observable<any> {
    // JSON dosyasının yolu
    const url = `assets/products.json`;

    // HttpClient ile JSON dosyasını okuyarak verileri alıyoruz
    return this.http.get<any>(url).pipe(
      map(events => events.find(event => event.id === eventId))
    );
  }
 
 

}
