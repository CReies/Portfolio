
import { Injectable, inject, signal, DOCUMENT } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
	private readonly document = inject(DOCUMENT);
	private readonly currentTheme = signal<Theme>('dark');
	readonly theme = this.currentTheme.asReadonly();

	toggle(): void {
		const next = this.theme() === 'dark' ? 'light' : 'dark';
		this.currentTheme.set(next);
		// Body owns the global CSS variables; Angular binds component theme classes.
		this.document.body.classList.remove('dark', 'light');
		this.document.body.classList.add(next);
	}
}
