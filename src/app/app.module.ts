import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { PapaParseModule } from 'ngx-papaparse';
import { CardsModule } from './cards/cards.module';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    PapaParseModule,
    CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
