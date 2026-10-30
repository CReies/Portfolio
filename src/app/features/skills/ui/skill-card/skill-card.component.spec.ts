import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SkillCardComponent } from './skill-card.component';
describe('Skill labels and assets', () => {
  it('keeps readable names separate from asset identifiers and reacts to input changes', () => {
    TestBed.configureTestingModule({ imports: [SkillCardComponent], providers: [provideHttpClient(), provideHttpClientTesting()] });
    const fixture = TestBed.createComponent(SkillCardComponent);
    const http = TestBed.inject(HttpTestingController);
    fixture.componentRef.setInput('skill', {name: 'C#', icon: 'CSharp'});
    fixture.detectChanges();
    http.expectOne('assets/images/svg/CSharp.svg').flush('<svg></svg>');
    expect(fixture.nativeElement.textContent).toContain('C#');
    fixture.componentRef.setInput('skill', {name: 'PostgreSQL', icon: 'PostgresSQL'});
    fixture.detectChanges();
    http.expectOne('assets/images/svg/PostgresSQL.svg').flush('<svg></svg>');
    expect(fixture.nativeElement.textContent).toContain('PostgreSQL');
    expect(fixture.nativeElement.textContent).not.toContain('C#');
    http.verify();
  });
});

