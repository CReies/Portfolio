import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
describe('Profile content', () => {
  it('presents the current role, concrete work and local bilingual CV downloads', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelector('h1')?.textContent).toBe('Backend & Full-Stack Developer');
    expect(page.textContent).toContain('since 2024');
    expect(page.textContent).toContain('before QA handoff');
    expect(page.querySelector('a[href="#projectsSection"]')).not.toBeNull();
    expect(page.querySelector('a[href="mailto:ccreyesmolina@gmail.com"]')).not.toBeNull();
    const downloads = page.querySelectorAll<HTMLAnchorElement>('a[download]');
    expect(Array.from(downloads, (a) => a.getAttribute('href'))).toEqual([
      'assets/documents/Cristian_Reyes_CV_EN.pdf',
      'assets/documents/Cristian_Reyes_CV_ES.pdf',
    ]);
    expect(page.textContent).not.toContain('Vue');
    expect(page.textContent).not.toContain('MySQL');
  });
});
