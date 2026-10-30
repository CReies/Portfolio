import { Component, inject, signal, ChangeDetectionStrategy, DOCUMENT, HostListener, ViewChild } from '@angular/core';
import { ThemeService } from '../../core/theme/theme.service';
import { TitleComponent } from './title/title.component';
import { NavComponent } from './nav/nav.component';
import { ResponsiveMenuComponent } from './responsive-menu/responsive-menu.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';

@Component({
    selector: 'app-header',
    imports: [
        TitleComponent,
        NavComponent,
        ResponsiveMenuComponent,
        ThemeSwitchComponent,
    ],
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './header.component.css'
})
export class HeaderComponent {
	private readonly document = inject(DOCUMENT);
	@ViewChild(ResponsiveMenuComponent) private menuControl?: ResponsiveMenuComponent;
	readonly themeService = inject(ThemeService);
	readonly menuOpen = signal(false);
	readonly mobile = signal(this.isMobile());

	toggleMenu(): void {
		this.menuOpen.update((open) => !open);
	}

	@HostListener('window:resize')
	onResize(): void {
		this.mobile.set(this.isMobile());
		if (!this.mobile()) this.menuOpen.set(false);
	}

	@HostListener('document:keydown.escape', ['$event'])
	closeOnEscape(event: Event): void {
		if (!this.menuOpen()) return;
		event.preventDefault();
		this.menuOpen.set(false);
		this.menuControl?.focus();
	}

	selectLink(link: string): void {
		const wasOpen = this.menuOpen();
		this.menuOpen.set(false);
		if (link.startsWith('#')) {
			this.document.getElementById(link.slice(1))?.focus({ preventScroll: true });
		} else if (wasOpen) {
			this.menuControl?.focus();
		}
	}

	private isMobile(): boolean {
		return this.document.defaultView?.matchMedia('(max-width: 900px)').matches ?? false;
	}
}
