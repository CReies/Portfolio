import { Technology } from '../../../../shared/models/technology.model';

export interface ProjectCardFrontData {
	readonly title: string;
	readonly description: string;
	readonly image: string;
	readonly imageAlt: string;
	readonly featured: boolean;
	readonly technologies: readonly Technology[];
}

