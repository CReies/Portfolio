import { Component } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { NavComponent } from './nav/nav.component';
import { ResponsiveMenuComponent } from './responsive-menu/responsive-menu.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [
		TitleComponent,
		NavComponent,
		ResponsiveMenuComponent,
		ThemeSwitchComponent,
	],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
})
export class HeaderComponent {}
