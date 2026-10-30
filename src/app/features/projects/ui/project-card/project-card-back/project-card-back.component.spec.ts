import { TestBed } from '@angular/core/testing';
import { ProjectCardBackComponent } from './project-card-back.component';

describe('ProjectCardBackComponent', () => {
	it('renders distinct source links with descriptive accessible names', async () => {
		await TestBed.configureTestingModule({ imports: [ProjectCardBackComponent] }).compileComponents();
		const fixture = TestBed.createComponent(ProjectCardBackComponent);
		fixture.componentRef.setInput('projectCardBackData', {
			title: 'ToDo', capabilities: ['Manage tasks'], technologies: [{ name: 'React' }],
			links: [
				{ label: 'Frontend repository', url: 'https://github.com/CReies/TodoList' },
				{ label: 'API repository', url: 'https://github.com/CReies/TodoAPI' },
			],
		});
		fixture.detectChanges();
		const links = fixture.nativeElement.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>;
		expect(links.length).toBe(2);
		expect(links[0].href).toBe('https://github.com/CReies/TodoList');
		expect(links[1].href).toBe('https://github.com/CReies/TodoAPI');
		expect(links[0].getAttribute('aria-label')).toContain('ToDo: Frontend repository');
		expect(links[0].rel).toContain('noopener');
		expect(fixture.nativeElement.textContent).toContain('Manage tasks');
	});
});

