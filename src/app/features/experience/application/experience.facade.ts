import { Injectable } from '@angular/core';
import { EXPERIENCE } from '../data-access/experience.data';
@Injectable({ providedIn: 'root' })
export class ExperienceFacade {
  readonly stages = EXPERIENCE;
}
