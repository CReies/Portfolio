import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SocialLink } from './models/social-link.model';
import { SocialLinkComponent } from './social-link/social-link.component';

@Component({
  selector: 'app-footer',
  imports: [SocialLinkComponent],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  socialLinks: SocialLink[] = [
    { name: 'GitHub', link: 'https://github.com/CReies' },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/cristian-reyes-a66b01167/',
    },
    { name: 'Instagram', link: 'https://www.instagram.com/creiesss/' },
  ];
}
