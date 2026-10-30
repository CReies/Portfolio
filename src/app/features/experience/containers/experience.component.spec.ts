import { TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';
describe('CV experience', () => {
  it('preserves Sofka stages and dates without filling employment gaps', () => {
    const fixture = TestBed.createComponent(ExperienceComponent);
    fixture.detectChanges();
    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelectorAll('.experience__timeline li').length).toBe(5);
    expect(
      Array.from(page.querySelectorAll('.experience__date'), (e) => e.textContent?.trim()),
    ).toEqual([
      'Oct 2026 – Present',
      'Jul 2026 – Aug 2026',
      'Mar 2025 – Jun 2026',
      'Nov 2024 – Feb 2025',
      'Feb 2024 – Jun 2024',
    ]);
    expect(page.textContent).toContain('Joining a banking backend project');
    expect(page.textContent).toContain('Expected graduation: June 2027');
    expect(page.textContent).toContain('English · B2');
    expect(page.textContent).toContain('Spanish · Native');
  });
});
