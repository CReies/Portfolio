import { Component, Input } from '@angular/core';
import { ISocialLink } from '../../../../Interfaces/ISocialLink';
import { SvgComponent } from '../../svg/svg.component';

@Component({
	selector: 'app-social-link',
	standalone: true,
	imports: [SvgComponent],
	templateUrl: './social-link.component.html',
	styleUrl: './social-link.component.css',
})
export class SocialLinkComponent {
	@Input() socialLink!: ISocialLink;
}
