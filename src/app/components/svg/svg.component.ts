import { Component, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-svg',
	standalone: true,
	templateUrl: './svg.component.html',
	styleUrl: './svg.component.css',
})
export class SvgComponent implements OnChanges {
	@Input()
	public name?: string;
	public svgIcon: any;

	constructor(
		private httpClient: HttpClient,
		private sanitizer: DomSanitizer
	) {}

	public ngOnChanges(): void {
		if (!this.name) {
			this.svgIcon = '';
			return;
		}
		this.httpClient
			.get(`assets/images/svg/${this.name}.svg`, { responseType: 'text' })
			.subscribe((value) => {
				this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(value);
			});
	}
}
