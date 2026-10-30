import { Injectable } from '@angular/core';
import { PROJECTS } from '../data-access/projects.data';

@Injectable({ providedIn: 'root' })
export class ProjectsFacade {
	readonly projects = PROJECTS;
}
