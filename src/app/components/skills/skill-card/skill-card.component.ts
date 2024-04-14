import { Component, Input } from '@angular/core';
import { ITechnology } from '../../../../Interfaces/ITechnology';
import { SvgComponent } from '../../svg/svg.component';

@Component({
	selector: 'app-skill-card',
	standalone: true,
	imports: [SvgComponent],
	templateUrl: './skill-card.component.html',
	styleUrl: './skill-card.component.css',
})
export class SkillCardComponent {
	@Input() skill!: ITechnology;
}
