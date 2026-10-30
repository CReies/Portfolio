import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Theme } from '../../../core/theme/theme.service';
import { SvgComponent } from '../../../shared/ui/svg/svg.component';

@Component({
    selector: 'app-theme-switch',
    imports: [SvgComponent],
    templateUrl: './theme-switch.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './theme-switch.component.css'
})
export class ThemeSwitchComponent {
	@Input() menuOpen = false;
	@Input() theme: Theme = 'dark';
	@Output() readonly themeToggle = new EventEmitter<void>();
}
