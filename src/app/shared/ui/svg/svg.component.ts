import { Component, Input, OnChanges, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-svg',
	standalone: true,
	templateUrl: './svg.component.html',
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: './svg.component.css',
})
export class SvgComponent implements OnChanges, OnDestroy {
	@Input()
	public name?: string;
	public svgIcon: SafeHtml | string = '';
	private request?: Subscription;

	constructor(
		private httpClient: HttpClient,
		private sanitizer: DomSanitizer
	) {}

	public ngOnChanges(): void {
		this.request?.unsubscribe();
		this.svgIcon = '';
		if (!this.name || !/^[a-zA-Z0-9-]+$/.test(this.name)) {
			return;
		}
		this.request = this.httpClient
			.get(`assets/images/svg/${this.name}.svg`, { responseType: 'text' })
			.subscribe({
				next: (value) => {
					// Only repository-owned SVG assets are accepted by the name guard above.
					this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(value);
				},
				error: () => { this.svgIcon = ''; },
			});
	}

	public ngOnDestroy(): void {
		this.request?.unsubscribe();
	}
}
