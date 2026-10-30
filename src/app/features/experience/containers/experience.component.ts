import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ExperienceFacade } from '../application/experience.facade';
@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ExperienceComponent { readonly stages = inject(ExperienceFacade).stages; }

