import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlifyPipe } from './urlify.pipe';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { ProductionBoxComponent } from './production-box/production-box.component';
import { QuantityDisplayComponent } from './quantity-display/quantity-display.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent,
    UrlifyPipe,
    ProductionBoxComponent,
    QuantityDisplayComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
