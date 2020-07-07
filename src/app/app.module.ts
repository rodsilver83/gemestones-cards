import { ActionCardComponent } from './action-card/action-card.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card/card.component';
import { ChatComponent } from './chat/chat.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { DeckCardComponent } from './deck-card/deck-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HostComponent } from './host/host.component';
import { HttpClientModule } from '@angular/common/http';
import { LobbyComponent } from './lobby/lobby.component';
import { MoneyCardComponent } from './money-card/money-card.component';
import { NgModule } from '@angular/core';
import { PlayerGameComponent } from './player-game/player-game.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertyWildCardComponent } from './property-wild-card/property-wild-card.component';
import { RentCardComponent } from './rent-card/rent-card.component';
import { RoomPlayerComponent } from './room-player/room-player.component';
import { TableComponent } from './table/table.component';
import { WildCardComponent } from './wild-card/wild-card.component';

import { registerLocaleData } from '@angular/common';

import localeMx from '@angular/common/locales/es-MX';
import { PlayerMiniTableComponent } from './player-mini-table/player-mini-table.component';

registerLocaleData(localeMx);

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
		PlayerGameComponent,
		PlayersListComponent,
		PropertyCardComponent,
		PropertyWildCardComponent,
		RentCardComponent,
		RoomPlayerComponent,
		TableComponent,
		WildCardComponent,
		PlayerMiniTableComponent,
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
