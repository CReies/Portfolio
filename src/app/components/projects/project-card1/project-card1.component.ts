import { Component } from '@angular/core';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';

@Component({
	selector: 'app-project-card1',
	standalone: true,
	imports: [FrontComponent, BackComponent],
	templateUrl: './project-card1.component.html',
	styleUrl: './project-card1.component.css',
})
export class ProjectCard1Component {}
