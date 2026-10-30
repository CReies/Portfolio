import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let fixture: ComponentFixture<ProjectsComponent>;
  let callback: IntersectionObserverCallback;
  let observe: jasmine.Spy;
  let disconnect: jasmine.Spy;
  let originalObserver: typeof IntersectionObserver;

  beforeEach(async () => {
    originalObserver = window.IntersectionObserver;
    observe = jasmine.createSpy('observe');
    disconnect = jasmine.createSpy('disconnect');
    window.IntersectionObserver = class {
      constructor(next: IntersectionObserverCallback) {
        callback = next;
      }
      observe = observe;
      disconnect = disconnect;
    } as unknown as typeof IntersectionObserver;
    await TestBed.configureTestingModule({ imports: [ProjectsComponent] }).compileComponents();
    fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
  });
  afterEach(() => {
    fixture.destroy();
    window.IntersectionObserver = originalObserver;
  });

  it('shows the three public solutions in order, with valid separate source links', () => {
    const page: HTMLElement = fixture.nativeElement;
    const cards = page.querySelectorAll('app-project-card');
    expect(cards.length).toBe(3);
    expect(cards[0].textContent).toContain('Reto Sistema Bancario');
    expect(cards[1].textContent).toContain('La Pinguinera');
    expect(cards[2].textContent).toContain('ToDo App & API');
    expect(page.querySelectorAll('.projects__card--featured').length).toBe(2);
    expect(page.querySelector('a[href="https://github.com/CReies/TodoList"]')).not.toBeNull();
    expect(page.querySelector('a[href*="Simple-CRUD"]')).toBeNull();
    expect(page.querySelectorAll('img[src^="assets/images/projects/"]').length).toBe(3);
  });

  it('triggers one entrance on intersection and disconnects the observer', () => {
    expect(observe).toHaveBeenCalled();
    expect(fixture.componentInstance.entered()).toBeFalse();
    callback([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.projects__cards--entered')).not.toBeNull();
    expect(disconnect).toHaveBeenCalled();
  });

  it('keeps project content available without IntersectionObserver', () => {
    fixture.destroy();
    window.IntersectionObserver = undefined as unknown as typeof IntersectionObserver;
    fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('app-project-card').length).toBe(3);
    expect(fixture.componentInstance.entered()).toBeFalse();
  });
});
