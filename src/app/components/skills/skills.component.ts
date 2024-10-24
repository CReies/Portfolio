import { Component } from '@angular/core';
import { ITechnology } from '../../../Interfaces/ITechnology';
import { SkillCardComponent } from './skill-card/skill-card.component';
import skillsData from '../../../data/Skills.json';
import toolsData from '../../../data/Tools.json';

@Component({
	selector: 'app-skills',
	standalone: true,
	imports: [SkillCardComponent],
	templateUrl: './skills.component.html',
	styleUrl: './skills.component.css',
})
export class SkillsComponent {
	skills: ITechnology[] = skillsData as ITechnology[];

	tools: ITechnology[] = toolsData as ITechnology[];
}
