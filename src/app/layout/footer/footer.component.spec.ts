import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('Footer content', () => {
  it('uses the current year and names all social destinations', () => {
    TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelector('.footer__copyright')!.textContent).toContain(
      `${new Date().getFullYear()} Cristian Reyes`,
    );
    const names = Array.from(page.querySelectorAll('nav a'), (link) =>
      link.getAttribute('aria-label'),
    );
    expect(names).toEqual([
      'GitHub (opens in a new tab)',
      'LinkedIn (opens in a new tab)',
      'Instagram (opens in a new tab)',
    ]);
  });
});
