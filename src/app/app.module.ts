import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { PapaParseModule } from 'ngx-papaparse';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UrlifyPipe } from './urlify.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent,
    UrlifyPipe
  ],
  imports: [
    BrowserModule,
    PapaParseModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
