import { Component } from '@angular/core';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';

@Component({
	selector: 'app-project-card',
	standalone: true,
	imports: [FrontComponent, BackComponent],
	templateUrl: './project-card.component.html',
	styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {}
