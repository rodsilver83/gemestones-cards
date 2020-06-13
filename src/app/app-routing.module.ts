import { HostComponent } from './host/host.component';
import { TableComponent } from './table/table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LobbyComponent } from './lobby/lobby.component';
import { RoomPlayerComponent } from './room-player/room-player.component';

const routes: Routes = [
	{
		path: 'lobby',
		component: LobbyComponent,
	},
	{
		path: 'host',
		component: HostComponent,
	},
	{
		path: 'player',
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
