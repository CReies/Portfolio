import { Component, Input } from '@angular/core';
import { IProjectCardFrontData } from '../../../../../Interfaces/IProjectCardFrontData';

@Component({
	selector: 'app-project-card-front',
	standalone: true,
	imports: [],
	templateUrl: './project-card-front.component.html',
	styleUrl: './project-card-front.component.css',
})
export class ProjectCardFrontComponent {
	@Input() projectCardFrontData!: IProjectCardFrontData;
	simpleTitle!: string;
	boldTitle !:string

	ngOnInit(): void {
		this.simpleTitle = this.projectCardFrontData.title.split('*')[0];
		this.boldTitle = this.projectCardFrontData.title.split('*')[1];
	}
}
