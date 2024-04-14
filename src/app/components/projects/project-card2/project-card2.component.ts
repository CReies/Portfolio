import { Component } from '@angular/core';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';

@Component({
	selector: 'app-project-card2',
	standalone: true,
	imports: [FrontComponent, BackComponent],
	templateUrl: './project-card2.component.html',
	styleUrl: './project-card2.component.css',
})
export class ProjectCard2Component {}
