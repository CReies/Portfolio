import { Component } from '@angular/core';
import { ITechnology } from '../../../Interfaces/ITechnology';
import { SkillCardComponent } from './skill-card/skill-card.component';

@Component({
	selector: 'app-skills',
	standalone: true,
	imports: [SkillCardComponent],
	templateUrl: './skills.component.html',
	styleUrl: './skills.component.css',
})
export class SkillsComponent {
	skills: ITechnology[] = [
		{ name: 'TypeScript' },
		{ name: 'Vue' },
		{ name: 'React' },
		{ name: 'Redux' },
		{ name: 'Angular' },
		{ name: 'NodeJS' },
		{ name: 'Express' },
		{ name: 'Java' },
		{ name: 'SpringBoot' },
		{ name: 'CSharp' },
		{ name: 'DotNet' },
		{ name: 'MySQL' },
		{ name: 'PostgresSQL' },
		{ name: 'MongoDB' },
	];

	tools: ITechnology[] = [
		{ name: 'VSCode' },
		{ name: 'VS2022' },
		{ name: 'Windows' },
		{ name: 'Linux' },
		{ name: 'Git' },
	];
}
