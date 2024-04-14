import { Component } from '@angular/core';
import { SvgComponent } from '../../svg/svg.component';

@Component({
	selector: 'app-theme-switch',
	standalone: true,
	imports: [SvgComponent],
	templateUrl: './theme-switch.component.html',
	styleUrl: './theme-switch.component.css',
})
export class ThemeSwitchComponent {}
