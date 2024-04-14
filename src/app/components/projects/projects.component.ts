import { Component } from '@angular/core';
import { IProject } from '../../../Interfaces/IProject';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({
	selector: 'app-projects',
	standalone: true,
	imports: [ProjectCardComponent],
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.css',
})
export class ProjectsComponent {
	projects: IProject[] = [
		{
			id: 0,
			title: 'Simple *Crud*',
			image:
				'https://opengraph.githubassets.com/53185f37b9432bb6689f7fffd2a1bb95e7d1428fc486d2da211a8cef761a1dce/CReies/Simple-CRUD',
			repoLink: 'https://github.com/CReies/Simple-CRUD',
			description:
				'This is a simple CRUD, the frontend is very basic with vanilla js, the backend is made with SpringBoot and the database is MySQL.',
			technologies: [
				{ name: 'Java' },
				{ name: 'SpringBoot' },
				{ name: 'MySQL' },
			],
		},
		{
			id: 1,
			title: 'ToDo *API*',
			image:
				'https://opengraph.githubassets.com/77292d07699a441fc6e075126e653afe0f84f98454cb6e40b29681fe23530426/CReies/TodoAPI',
			repoLink: 'https://github.com/CReies/TodoAPI',
			description:
				'This is an REST API for a ToDo app, developed on NodeJS using Typescript and mongoose to do the connection with the database on MongoDB',
			technologies: [
				{ name: 'TypeScript' },
				{ name: 'NodeJS' },
				{ name: 'Express' },
				{ name: 'MongoDB' },
			],
		},
		{
			id: 2,
			title: 'Simple *Crud*',
			image:
				'https://opengraph.githubassets.com/53185f37b9432bb6689f7fffd2a1bb95e7d1428fc486d2da211a8cef761a1dce/CReies/Simple-CRUD',
			repoLink: 'https://github.com/CReies/Simple-CRUD',
			description:
				'This is a simple CRUD, the frontend is very basic with vanilla js, the backend is made with SpringBoot and the database is MySQL.',
			technologies: [
				{ name: 'Java' },
				{ name: 'SpringBoot' },
				{ name: 'MySQL' },
			],
		},
	];
}
