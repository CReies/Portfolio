import { DOCUMENT } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('Portfolio composition', () => {
  afterEach(() => {
    const body = TestBed.inject(DOCUMENT).body;
    body.classList.remove('light');
    body.classList.add('dark');
  });
  function render() {
    spyOn(window, 'matchMedia').and.callFake(
      (query) => ({ matches: query.includes('max-width'), media: query }) as MediaQueryList,
    );
    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    return fixture;
  }
  it('composes the sections with a single main and profile heading', () => {
    const fixture = render();
    const page: HTMLElement = fixture.nativeElement;
    for (const id of ['homeSection', 'projectsSection', 'experienceSection', 'skillsSection'])
      expect(page.querySelector('#' + id)).not.toBeNull();
    expect(page.querySelectorAll('h1').length).toBe(1);
    expect(page.querySelectorAll('main').length).toBe(1);
    expect(page.querySelectorAll('app-project-card').length).toBe(3);
    expect(page.querySelectorAll('app-skill-card').length).toBe(35);
    expect(page.querySelectorAll('app-social-link').length).toBe(3);
  });
  it('connects menu and theme controls with the whole page', () => {
    const fixture = render();
    const page: HTMLElement = fixture.nativeElement;
    const menu = page.querySelector<HTMLButtonElement>('#responsiveMenuOpen')!;
    const nav = page.querySelector<HTMLElement>('#headerNavbar')!;
    const theme = page.querySelector<HTMLButtonElement>('#themeSwitchContainer')!;
    expect(nav.inert).toBeTrue();
    menu.click();
    fixture.detectChanges();
    expect(menu.getAttribute('aria-expanded')).toBe('true');
    expect(nav.inert).toBeFalse();
    theme.click();
    fixture.detectChanges();
    for (const element of [
      page.querySelector('.header')!,
      page.querySelector('.main__inner')!,
      TestBed.inject(DOCUMENT).body,
    ])
      expect(element.classList.contains('light')).toBeTrue();
    menu.click();
    fixture.detectChanges();
    expect(nav.inert).toBeTrue();
    theme.click();
    fixture.detectChanges();
    expect(page.querySelector('.main__inner')!.classList.contains('dark')).toBeTrue();
  });
});
