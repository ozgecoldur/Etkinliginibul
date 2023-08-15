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
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
