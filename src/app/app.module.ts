import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionCardComponent } from './action-card/action-card.component';
import { CardComponent } from './card/card.component';
import { DeckComponent } from './deck/deck.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { RentCardComponent } from './rent-card/rent-card.component';
import { MoneyCardComponent } from './money-card/money-card.component';
import { LobbyComponent } from './lobby/lobby.component';
import { TableComponent } from './table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ActionCardComponent,
    CardComponent,
    DeckComponent,
    PropertyCardComponent,
    WildCardComponent,
    RentCardComponent,
    MoneyCardComponent,
    LobbyComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
