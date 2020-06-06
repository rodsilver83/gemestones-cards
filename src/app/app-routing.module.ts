import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LobbyComponent } from './lobby/lobby.component';
import { RoomComponent } from './room/room.component';
import { RoomPlayerComponent } from './room-player/room-player.component';

const routes: Routes = [
	{
		path: 'lobby',
		component: LobbyComponent,
	},
	{
		path: 'room',
		component: RoomComponent,
	},
	{
		path: 'roomPlayer',
		component: RoomPlayerComponent,
	},
	{
		path: '**',
		component: LobbyComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
