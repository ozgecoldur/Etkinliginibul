import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Ana sayfa için home bileşeni çağrılacak
  // Diğer yönlendirme yapılandırmalarını buraya ekleyebilirsiniz
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
