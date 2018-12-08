import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { CardListComponent } from '../card-list/card-list.component';

const routes: Routes = [
  { path: 'card/:cardName', component: CardComponent },
  { path: '', component: CardListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
