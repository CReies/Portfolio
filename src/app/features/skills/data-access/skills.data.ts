import { TechnologyGroup } from '../models/technology-group.model';
import skills from './skills.json';
import tools from './tools.json';
export const SKILLS: readonly TechnologyGroup[] = skills;
export const TOOLS: readonly TechnologyGroup[] = tools;
export const ARCHITECTURE = [
  'DDD',
  'Hexagonal Architecture',
  'Microservices',
  'CQRS',
  'SOLID',
  'Event-driven systems',
  'JUnit',
  'Mockito',
] as const;
