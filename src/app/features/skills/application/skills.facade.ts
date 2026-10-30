import { Injectable } from '@angular/core';
import { SKILLS, TOOLS, ARCHITECTURE } from '../data-access/skills.data';
@Injectable({ providedIn: 'root' })
export class SkillsFacade {
  readonly skills = SKILLS;
  readonly tools = TOOLS;
  readonly architecture = ARCHITECTURE;
}
