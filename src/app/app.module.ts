import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActionCardComponent } from './components/cards/action-card/action-card.component';
import { AppComponent } from './app.component';
import { CardComponent } from './components/cards/card/card.component';
import { ChatComponent } from './components/chat/chat.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { DeckCardComponent } from './components/deck-card/deck-card.component';
import { HostComponent } from './components/host/host.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { MoneyCardComponent } from './components/cards/money-card/money-card.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { PropertyCardComponent } from './components/cards/property-card/property-card.component';
import { PropertyWildCardComponent } from './components/cards/property-wild-card/property-wild-card.component';
import { RentCardComponent } from './components/cards/rent-card/rent-card.component';
import { RoomPlayerComponent } from './components/room-player/room-player.component';
import { TableComponent } from './table/table.component';
import { WildCardComponent } from './components/cards/wild-card/wild-card.component';
import { PlayerMiniTableComponent } from './components/player-mini-table/player-mini-table.component';
import { HandDeckComponent } from './components/hand-deck/hand-deck.component';
import { BankDeckComponent } from './components/bank-deck/bank-deck.component';
import { SetsDeckComponent } from './components/sets-deck/sets-deck.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		ActionCardComponent,
		AppComponent,
		CardComponent,
		ChatComponent,
		ControlPanelComponent,
		DeckCardComponent,
		HostComponent,
		LobbyComponent,
		MoneyCardComponent,
		PlayersListComponent,
		PropertyCardComponent,
		PropertyWildCardComponent,
		RentCardComponent,
		RoomPlayerComponent,
		TableComponent,
		WildCardComponent,
		PlayerMiniTableComponent,
		HandDeckComponent,
		BankDeckComponent,
		SetsDeckComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		DragDropModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
