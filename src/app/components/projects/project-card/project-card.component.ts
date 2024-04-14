import { Component, Input } from '@angular/core';
import { IProject } from '../../../../Interfaces/IProject';
import { IProjectCardBackData } from '../../../../Interfaces/IProjectCardBackData';
import { IProjectCardFrontData } from '../../../../Interfaces/IProjectCardFrontData';
import { ProjectCardBackComponent } from './project-card-back/project-card-back.component';
import { ProjectCardFrontComponent } from './project-card-front/project-card-front.component';

@Component({
	selector: 'app-project-card',
	standalone: true,
	imports: [ProjectCardFrontComponent, ProjectCardBackComponent],
	templateUrl: './project-card.component.html',
	styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
	@Input() projectData!: IProject;
	projectCardFrontData!: IProjectCardFrontData;
	projectCardBackData!: IProjectCardBackData;

	ngOnInit(): void {
		this.projectCardFrontData = {
			title: this.projectData.title,
			description: this.projectData.description,
			image: this.projectData.image,
		};

		this.projectCardBackData = {
			technologies: this.projectData.technologies,
			repoLink: this.projectData.repoLink,
		};
	}
}
