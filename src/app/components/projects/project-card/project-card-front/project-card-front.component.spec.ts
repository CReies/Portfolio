import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardFrontComponent } from './project-card-front.component';

describe('ProjectCardFrontComponent', () => {
	let component: ProjectCardFrontComponent;
	let fixture: ComponentFixture<ProjectCardFrontComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProjectCardFrontComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ProjectCardFrontComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
