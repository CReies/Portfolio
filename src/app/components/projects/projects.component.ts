import { Component } from '@angular/core';
import { IProject } from '../../../Interfaces/IProject';
import { ProjectCardComponent } from './project-card/project-card.component';
import projectsData from '../../../data/projects.json';

@Component({
	selector: 'app-projects',
	standalone: true,
	imports: [ProjectCardComponent],
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.css',
})
export class ProjectsComponent {
	projects: IProject[] = projectsData as IProject[];
}
