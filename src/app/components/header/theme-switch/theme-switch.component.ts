import { Component } from '@angular/core';
import { SvgComponent } from '../../svg/svg.component';

@Component({
	selector: 'app-theme-switch',
	standalone: true,
	imports: [SvgComponent],
	templateUrl: './theme-switch.component.html',
	styleUrl: './theme-switch.component.css',
})
export class ThemeSwitchComponent {
	lightThemeDisabled = true;

	changeTheme = (): void => {
		const body = document.querySelector('body');
		const header = document.querySelector('.header');

		body?.classList.toggle('light');
		body?.classList.toggle('dark');
		header?.classList.toggle('light');
		header?.classList.toggle('dark');

		this.lightThemeDisabled = !this.lightThemeDisabled;
	};
}
