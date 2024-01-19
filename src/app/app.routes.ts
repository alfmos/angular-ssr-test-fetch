import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
	{
		path: 'bored',
		loadComponent: () => import('./bored/bored.component').then((m) => m.BoredComponent)
	},
];
