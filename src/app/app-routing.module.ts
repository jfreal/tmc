import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: 'content/:contentName', component: ContentComponent },
  { path: 'card/:cardName', component: CardComponent },
  { path: '', component: CardListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
