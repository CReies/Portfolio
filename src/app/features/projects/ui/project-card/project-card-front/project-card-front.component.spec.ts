import { TestBed } from '@angular/core/testing';
import { ProjectCardFrontComponent } from './project-card-front.component';

describe('ProjectCardFrontComponent', () => {
	it('renders local artwork with dimensions and updates accessible content', async () => {
		await TestBed.configureTestingModule({ imports: [ProjectCardFrontComponent] }).compileComponents();
		const fixture = TestBed.createComponent(ProjectCardFrontComponent);
		const initial = { title: 'Banking', description: 'Accounts', image: 'assets/images/projects/banking.svg', imageAlt: 'Two services', featured: true, technologies: [{ name: 'Java' }] };
		fixture.componentRef.setInput('projectCardFrontData', initial);
		fixture.detectChanges();
		const image: HTMLImageElement = fixture.nativeElement.querySelector('img');
		expect(image.getAttribute('width')).toBe('640');
		expect(image.getAttribute('height')).toBe('320');
		expect(image.loading).toBe('lazy');
		fixture.componentRef.setInput('projectCardFrontData', { ...initial, title: 'Quotes', imageAlt: 'Quote architecture', featured: false });
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('h3').textContent).toBe('Quotes');
		expect(image.alt).toBe('Quote architecture');
		expect(fixture.nativeElement.textContent).toContain('Architecture illustration');
		expect(fixture.nativeElement.textContent).toContain('Full-stack project');
	});
});

