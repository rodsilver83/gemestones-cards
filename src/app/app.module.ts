import { TableComponent } from './table/table.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyWildCardComponent } from './property-wild-card/property-wild-card.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RoomPlayerComponent } from './room-player/room-player.component';
import { registerLocaleData } from '@angular/common';
import localeMx from '@angular/common/locales/es-MX';
import { ChatComponent } from './chat/chat.component';

registerLocaleData(localeMx);

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
		TableComponent,
		PropertyWildCardComponent,
		RoomPlayerComponent,
		ChatComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireDatabaseModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
