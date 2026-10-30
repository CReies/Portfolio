import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCardComponent } from './project-card.component';
import { Project } from '../../models/project.model';

describe('ProjectCardComponent', () => {
	let fixture: ComponentFixture<ProjectCardComponent>;
	const project: Project = {
		id: 7, title: 'Example project', description: 'A useful system',
		image: 'assets/images/projects/banking.svg', imageAlt: 'Architecture', featured: true,
		capabilities: ['Manage accounts'], technologies: [{ name: 'Java' }],
		links: [{ label: 'Backend repository', url: 'https://github.com/CReies/example' }],
	};
	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [ProjectCardComponent] }).compileComponents();
		fixture = TestBed.createComponent(ProjectCardComponent);
		fixture.componentRef.setInput('projectData', project);
		fixture.detectChanges();
	});

	it('exposes only the front face until details are requested and restores focus on return', () => {
		const card: HTMLElement = fixture.nativeElement;
		const front = card.querySelector<HTMLElement>('.projects__face--front')!;
		const back = card.querySelector<HTMLElement>('.projects__face--back')!;
		const detailsButton = front.querySelector<HTMLButtonElement>('button')!;
		const backButton = back.querySelector<HTMLButtonElement>('button')!;
		expect(back.inert).toBeTrue();
		expect(back.getAttribute('aria-hidden')).toBe('true');
		detailsButton.focus();
		detailsButton.click();
		expect(front.inert).toBeTrue();
		expect(front.getAttribute('aria-hidden')).toBe('true');
		expect(back.inert).toBeFalse();
		expect(document.activeElement).toBe(backButton);
		expect(detailsButton.getAttribute('aria-expanded')).toBe('true');
		backButton.click();
		expect(document.activeElement).toBe(detailsButton);
		expect(back.inert).toBeTrue();
		expect(front.inert).toBeFalse();
	});

	it('closes details with Escape and returns keyboard focus', () => {
		const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
		buttons[0].click();
		buttons[1].dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
		expect(fixture.componentInstance.detailsOpen).toBeFalse();
		expect(document.activeElement).toBe(buttons[0]);
	});

	it('updates both faces and repository links when its input changes', () => {
		fixture.componentRef.setInput('projectData', {
			...project, title: 'Updated project', description: 'New description',
			capabilities: ['New capability'], technologies: [{ name: '.NET' }],
			links: [{ label: 'Frontend repository', url: 'https://github.com/CReies/frontend' }],
		});
		fixture.detectChanges();
		const card: HTMLElement = fixture.nativeElement;
		expect(card.querySelector('h3')!.textContent).toBe('Updated project');
		expect(card.textContent).toContain('New description');
		expect(card.textContent).toContain('New capability');
		expect(card.textContent).toContain('.NET');
		expect(card.querySelector('a')!.href).toBe('https://github.com/CReies/frontend');
		expect(card.querySelector('main')).toBeNull();
	});
});

