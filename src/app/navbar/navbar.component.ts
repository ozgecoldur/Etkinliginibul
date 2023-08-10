import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../services/fake-api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  searchKeyword: string = ''; // Kullanıcının girdiği arama kelimesini tutacak değişken
  events: any[] = [
    // Örnek veriler burada devam eder
  ];
  filteredEvents: any[] = []; // Filtrelenmiş etkinliklerin listesi

  constructor() {
    this.filteredEvents = this.events; // Başlangıçta tüm etkinlikleri göster
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  filterEvents() {
    if (!this.searchKeyword) {
      // Arama terimi boşsa, tüm etkinlikleri göster
      this.filteredEvents = this.events;
    } else {
      // Arama terimi doluysa, etkinlikleri filtrele
      this.filteredEvents = this.events.filter(event =>
        event.name.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    }
  }

  performSearch() {
    this.filterEvents(); // Klavyeden Enter tuşuna basıldığında aramayı yap
  }
}