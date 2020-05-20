import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeckComponent } from './deck/deck.component';
import { LobbyComponent } from './lobby/lobby.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {
    path: 'lobby',
    component: LobbyComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: '**',
    component: DeckComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
