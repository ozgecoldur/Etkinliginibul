import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Routes ve RouterModule burada eklenir

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
  { path: '', component: HomeComponent }, // Ana sayfa için home bileşeni çağrılacak
  // Diğer yönlendirme yapılandırmalarını burada ekleyebilirsiniz
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
