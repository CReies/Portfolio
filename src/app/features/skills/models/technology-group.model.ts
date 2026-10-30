import { Technology } from '../../../shared/models/technology.model';
export interface TechnologyGroup {
  readonly title: string;
  readonly items: readonly Technology[];
}
