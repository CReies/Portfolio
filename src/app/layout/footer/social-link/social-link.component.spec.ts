import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SocialLinkComponent } from './social-link.component';

describe('Social profile links', () => {
  it('updates the destination and accessible name when the input changes', () => {
    TestBed.configureTestingModule({
      imports: [SocialLinkComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    const fixture = TestBed.createComponent(SocialLinkComponent);
    fixture.componentRef.setInput('socialLink', {
      name: 'GitHub',
      link: 'https://github.com/CReies',
    });
    fixture.detectChanges();
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    expect(link.getAttribute('aria-label')).toBe('GitHub (opens in a new tab)');
    expect(link.rel).toContain('noopener');
    fixture.componentRef.setInput('socialLink', {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/cristian-reyes-a66b01167/',
    });
    fixture.detectChanges();
    expect(link.getAttribute('aria-label')).toBe('LinkedIn (opens in a new tab)');
    expect(link.href).toContain('linkedin.com/in/cristian-reyes-a66b01167/');
    expect(fixture.nativeElement.querySelector('app-svg').getAttribute('aria-hidden')).toBe('true');
  });
});
