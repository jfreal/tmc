import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { PapaParseModule } from 'ngx-papaparse';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UrlifyPipe } from './urlify.pipe';
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
    PapaParseModule,
    AppRoutingModule,
    HttpClientModule,
    DisqusModule.forRoot('terraformingmarscards')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
