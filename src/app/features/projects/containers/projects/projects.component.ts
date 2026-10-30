import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild, inject, signal } from '@angular/core';
import { ProjectCardComponent } from '../../ui/project-card/project-card.component';
import { ProjectsFacade } from '../../application/projects.facade';

@Component({
	selector: 'app-projects',
	imports: [ProjectCardComponent],
	templateUrl: './projects.component.html',
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
	readonly projects = inject(ProjectsFacade).projects;
	readonly entered = signal(false);
	@ViewChild('projectSection') private section?: ElementRef<HTMLElement>;
	private observer?: IntersectionObserver;

	ngAfterViewInit(): void {
		if (typeof IntersectionObserver === 'undefined' || !this.section) return;
		this.observer = new IntersectionObserver((entries) => {
			if (!entries.some((entry) => entry.isIntersecting)) return;
			this.entered.set(true);
			this.observer?.disconnect();
		}, { threshold: 0.1 });
		this.observer.observe(this.section.nativeElement);
	}

	ngOnDestroy(): void {
		this.observer?.disconnect();
	}
}

