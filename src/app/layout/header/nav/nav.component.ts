import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-nav',
    imports: [],
    templateUrl: './nav.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './nav.component.css'
})
export class NavComponent {
	@Input() menuOpen = false;
	@Input() mobile = false;
	@Output() readonly linkSelected = new EventEmitter<string>();
  readonly navItems = [
    { id: 0, name: "Home", link: "#homeSection" },
    { id: 1, name: "Projects", link: "#projectsSection" },
    { id: 2, name: "Experience", link: "#experienceSection" },
    { id: 3, name: "Skills", link: "#skillsSection" },
    { id: 4, name: "Contact Me", link: "https://www.linkedin.com/in/cristian-reyes-a66b01167/", blank: true }
  ];
}
