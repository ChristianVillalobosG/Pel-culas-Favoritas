import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { CustomNavbarComponent } from './components/custom-navbar/custom-navbar.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { ListMovieComponent } from './components/list-movie/list-movie.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FavoritePageComponent,
    CustomNavbarComponent,
    CardMovieComponent,
    ListMovieComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
