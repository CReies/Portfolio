import { DOCUMENT } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('Header navigation', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let mobile: boolean;
  let page: HTMLElement;
  let target: HTMLElement | undefined;

  beforeEach(async () => {
    mobile = true;
    spyOn(window, 'matchMedia').and.callFake(
      (query) => ({ matches: mobile, media: query }) as MediaQueryList,
    );
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    page = fixture.nativeElement;
    fixture.detectChanges();
  });

  afterEach(() => {
    target?.remove();
    target = undefined;
    const body = TestBed.inject(DOCUMENT).body;
    body.classList.remove('light');
    body.classList.add('dark');
  });

  function menuButton(): HTMLButtonElement {
    return page.querySelector<HTMLButtonElement>('#responsiveMenuOpen')!;
  }

  function clickLink(selector: string): void {
    const link = page.querySelector<HTMLAnchorElement>(selector)!;
    link.addEventListener('click', (event) => event.preventDefault(), { once: true });
    link.click();
    fixture.detectChanges();
  }

  it('opens and closes the mobile navigation and removes hidden links from interaction', () => {
    const nav = page.querySelector<HTMLElement>('#headerNavbar')!;
    expect(nav.inert).toBeTrue();
    expect(menuButton().getAttribute('aria-expanded')).toBe('false');
    menuButton().click();
    fixture.detectChanges();
    expect(nav.inert).toBeFalse();
    expect(menuButton().getAttribute('aria-label')).toBe('Close navigation');
    menuButton().click();
    fixture.detectChanges();
    expect(nav.inert).toBeTrue();
  });

  it('closes on Escape and returns focus to the toggle', () => {
    menuButton().click();
    fixture.detectChanges();
    const focus = spyOn(menuButton(), 'focus');
    const event = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true });
    page.querySelector('nav a')!.dispatchEvent(event);
    fixture.detectChanges();
    expect(fixture.componentInstance.menuOpen()).toBeFalse();
    expect(focus).toHaveBeenCalled();
    expect(event.defaultPrevented).toBeTrue();
  });

  it('closes and moves focus to the selected section', () => {
    target = document.createElement('section');
    target.id = 'projectsSection';
    target.tabIndex = -1;
    document.body.append(target);
    menuButton().click();
    fixture.detectChanges();
    clickLink('a[href="#projectsSection"]');
    expect(fixture.componentInstance.menuOpen()).toBeFalse();
    expect(document.activeElement).toBe(target);
  });

  it('also closes the menu when the logo selects home', () => {
    target = document.createElement('section');
    target.id = 'homeSection';
    target.tabIndex = -1;
    document.body.append(target);
    menuButton().click();
    fixture.detectChanges();
    clickLink('.header__title');
    expect(fixture.componentInstance.menuOpen()).toBeFalse();
    expect(document.activeElement).toBe(target);
  });

  it('keeps desktop navigation interactive and resets the mobile expansion on resize', () => {
    menuButton().click();
    fixture.detectChanges();
    mobile = false;
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();
    expect(fixture.componentInstance.menuOpen()).toBeFalse();
    expect(page.querySelector<HTMLElement>('#headerNavbar')!.inert).toBeFalse();
    mobile = true;
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();
    expect(page.querySelector<HTMLElement>('#headerNavbar')!.inert).toBeTrue();
  });

  it('keeps the theme control available when the menu is closed and synchronizes its name', () => {
    const button = page.querySelector<HTMLButtonElement>('#themeSwitchContainer')!;
    expect(button.closest('[inert]')).toBeNull();
    expect(button.getAttribute('aria-label')).toBe('Use light theme');
    button.click();
    fixture.detectChanges();
    expect(page.querySelector('.header')!.classList.contains('light')).toBeTrue();
    expect(document.body.classList.contains('light')).toBeTrue();
    expect(button.getAttribute('aria-label')).toBe('Use dark theme');
  });

  it('does not mark the external contact destination as an active section', () => {
    const contact = page.querySelector<HTMLAnchorElement>('a[target="_blank"]')!;
    expect(contact.href).toBe('https://www.linkedin.com/in/cristian-reyes-a66b01167/');
    expect(contact.getAttribute('aria-current')).toBeNull();
    expect(contact.parentElement!.classList.contains('header__navbar-item--active')).toBeFalse();
    expect(contact.getAttribute('aria-label')).toContain('LinkedIn');
  });
});
