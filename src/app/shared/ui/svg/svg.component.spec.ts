import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgComponent } from './svg.component';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';

describe('SvgComponent', () => {
  let component: SvgComponent;
  let fixture: ComponentFixture<SvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SvgComponent],
    providers: [provideHttpClient(withXhr(), withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cancels an obsolete icon request when its name changes', () => {
    const http = TestBed.inject(HttpTestingController);
    fixture.componentRef.setInput('name', 'Sun');
    fixture.detectChanges();
    const previous = http.expectOne('assets/images/svg/Sun.svg');
    fixture.componentRef.setInput('name', 'Moon');
    fixture.detectChanges();
    expect(previous.cancelled).toBeTrue();
    http.expectOne('assets/images/svg/Moon.svg').flush('<svg data-icon="moon"></svg>');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('svg').getAttribute('data-icon')).toBe('moon');
    http.verify();
  });

  it('rejects asset traversal and clears missing icons', () => {
    const http = TestBed.inject(HttpTestingController);
    fixture.componentRef.setInput('name', '../untrusted');
    fixture.detectChanges();
    http.expectNone((request) => true);
    fixture.componentRef.setInput('name', 'Missing');
    fixture.detectChanges();
    http.expectOne('assets/images/svg/Missing.svg').flush('', { status: 404, statusText: 'Not Found' });
    fixture.detectChanges();
    expect(component.svgIcon).toBe('');
    http.verify();
  });
});
