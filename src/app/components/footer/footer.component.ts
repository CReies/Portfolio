import { Component } from '@angular/core';
import { ISocialLink } from '../../../Interfaces/ISocialLink';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.css',
})
export class FooterComponent {
	socialLinks: ISocialLink[] = [
		{ name: 'GitHub', link: 'https://github.com/CReies' },
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/in/cristian-reyes-a66b01167/',
		},
		{ name: 'Instagram', link: 'https://www.instagram.com/c._.reyes_/' },
	];
}
