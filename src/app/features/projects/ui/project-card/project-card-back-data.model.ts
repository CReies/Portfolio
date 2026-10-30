import { Technology } from '../../../../shared/models/technology.model';
import { ProjectLink } from '../../models/project.model';

export interface ProjectCardBackData {
  readonly title: string;
  readonly capabilities: readonly string[];
  readonly technologies: readonly Technology[];
  readonly links: readonly ProjectLink[];
}
