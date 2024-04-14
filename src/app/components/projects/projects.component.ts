import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectCard1Component } from './project-card1/project-card1.component';
import { ProjectCard2Component } from './project-card2/project-card2.component';

@Component({
	selector: 'app-projects',
	standalone: true,
	imports: [ProjectCardComponent, ProjectCard1Component, ProjectCard2Component],
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.css',
})
export class ProjectsComponent {}
