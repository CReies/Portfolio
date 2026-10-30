import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
describe('Grouped skills', () => {
  it('renders current categories, named tools and compact architecture tags', () => {
    TestBed.configureTestingModule({
      imports: [SkillsComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    const fixture = TestBed.createComponent(SkillsComponent);
    fixture.detectChanges();
    const page: HTMLElement = fixture.nativeElement;
    const text = page.textContent!;
    for (const name of [
      'Backend',
      'Frontend',
      'Data & integration',
      'Cloud & platform',
      'Architecture & quality',
      'Claude Code',
      'Codex',
      'GitHub Copilot',
      'OpenTelemetry',
      'VS Code',
      'Visual Studio',
    ])
      expect(text).toContain(name);
    for (const name of ['Vue', 'MySQL', 'Windows', 'Linux']) expect(text).not.toContain(name);
    expect(page.querySelectorAll('.skills__tags li').length).toBe(8);
    expect(page.querySelectorAll('app-skill-card').length).toBe(35);
  });
});
