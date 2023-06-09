import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UrlifyPipe } from './urlify.pipe';
import { Papa } from 'ngx-papaparse';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { ProductionBoxComponent } from './production-box/production-box.component';
import { QuantityDisplayComponent } from './quantity-display/quantity-display.component';
import { DisqusModule } from 'ngx-disqus';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent,
    UrlifyPipe,
    ProductionBoxComponent,
    QuantityDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
