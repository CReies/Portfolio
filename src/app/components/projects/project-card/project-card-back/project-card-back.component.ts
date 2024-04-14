import { Component, Input } from '@angular/core';
import { IProjectCardBackData } from '../../../../../Interfaces/IProjectCardBackData';
import { SvgComponent } from '../../../svg/svg.component';

@Component({
	selector: 'app-project-card-back',
	standalone: true,
	imports: [SvgComponent],
	templateUrl: './project-card-back.component.html',
	styleUrl: './project-card-back.component.css',
})
export class ProjectCardBackComponent {
	@Input() projectCardBackData!: IProjectCardBackData;
}
