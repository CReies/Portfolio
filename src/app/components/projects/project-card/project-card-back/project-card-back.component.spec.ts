import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardBackComponent } from './project-card-back.component';

describe('ProjectCardBackComponent', () => {
	let component: ProjectCardBackComponent;
	let fixture: ComponentFixture<ProjectCardBackComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProjectCardBackComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ProjectCardBackComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
