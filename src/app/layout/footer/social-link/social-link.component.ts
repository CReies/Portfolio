import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { SocialLink } from '../models/social-link.model';
import { SvgComponent } from '../../../shared/ui/svg/svg.component';

@Component({
    selector: 'app-social-link',
    imports: [SvgComponent],
    templateUrl: './social-link.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './social-link.component.css'
})
export class SocialLinkComponent {
	@Input({ required: true }) socialLink!: SocialLink;
}
