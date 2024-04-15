import { Component } from '@angular/core';
import { SvgComponent } from '../../svg/svg.component';

@Component({
	selector: 'app-responsive-menu',
	standalone: true,
	imports: [SvgComponent],
	templateUrl: './responsive-menu.component.html',
	styleUrl: './responsive-menu.component.css',
})
export class ResponsiveMenuComponent {
	closeMenuDisabled = true;

	openMenu = (): void => {
		const menu = document.querySelector('#headerNavbar');
		const themeSwitch = document.querySelector('#themeSwitchContainer');

		menu?.classList.toggle('header__navbar--disabled');
		themeSwitch?.classList.toggle('theme-switch--disabled');

		this.closeMenuDisabled = !this.closeMenuDisabled;
	};
}
