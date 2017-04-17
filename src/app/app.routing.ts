import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { OathcallbackComponent } from './oathcallback/oathcallback.component';

const appRoutes: Routes = [

	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path:'oauthcallback.html',
		component: OathcallbackComponent
	}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);