import { Component, Input, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, ViewChild, inject } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectCardBackData } from './project-card-back-data.model';
import { ProjectCardFrontData } from './project-card-front-data.model';
import { ProjectCardBackComponent } from './project-card-back/project-card-back.component';
import { ProjectCardFrontComponent } from './project-card-front/project-card-front.component';

@Component({
	selector: 'app-project-card',
	imports: [ProjectCardFrontComponent, ProjectCardBackComponent],
	templateUrl: './project-card.component.html',
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: './project-card.component.css'
})
export class ProjectCardComponent implements OnChanges {
	@Input({ required: true }) projectData!: Project;
	@ViewChild('detailsButton') private detailsButton?: ElementRef<HTMLButtonElement>;
	@ViewChild('backButton') private backButton?: ElementRef<HTMLButtonElement>;
	private readonly changeDetector = inject(ChangeDetectorRef);
	projectCardFrontData!: ProjectCardFrontData;
	projectCardBackData!: ProjectCardBackData;
	detailsOpen = false;

	ngOnChanges(): void {
		this.projectCardFrontData = {
			title: this.projectData.title,
			description: this.projectData.description,
			image: this.projectData.image,
			imageAlt: this.projectData.imageAlt,
			featured: this.projectData.featured,
			technologies: this.projectData.technologies,
		};
		this.projectCardBackData = {
			title: this.projectData.title,
			capabilities: this.projectData.capabilities,
			technologies: this.projectData.technologies,
			links: this.projectData.links,
		};
	}

	setDetails(open: boolean): void {
		this.detailsOpen = open;
		// Apply inert before focusing the newly exposed control.
		this.changeDetector.detectChanges();
		(open ? this.backButton : this.detailsButton)?.nativeElement.focus({ preventScroll: true });
	}

	onEscape(event: Event): void {
		if (!this.detailsOpen) return;
		event.preventDefault();
		event.stopPropagation();
		this.setDetails(false);
	}
}

