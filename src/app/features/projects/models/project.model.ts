import { Technology } from '../../../shared/models/technology.model';

export interface ProjectLink {
	readonly label: string;
	readonly url: string;
}

export interface Project {
	readonly id: number;
	readonly title: string;
	readonly description: string;
	readonly image: string;
	readonly imageAlt: string;
	readonly featured: boolean;
	readonly capabilities: readonly string[];
	readonly links: readonly ProjectLink[];
	readonly technologies: readonly Technology[];
}

