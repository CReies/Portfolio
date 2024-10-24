import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  navItems = [
    { id: 0, name: "Home", active: false, link: "#homeSection" },
    { id: 1, name: "Projects", active: false, link: "#projectsSection" },
    { id: 2, name: "Skills", active: false, link: "#skillsSection" },
    { id: 3, name: "Contact Me", active: true, link: "https://www.linkedin.com/in/cristian-reyes-a66b01167/", blank: true }
  ];
}
