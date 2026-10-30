import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ProjectCardFrontData } from '../project-card-front-data.model';

@Component({
  selector: 'app-project-card-front',
  imports: [],
  templateUrl: './project-card-front.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './project-card-front.component.css',
})
export class ProjectCardFrontComponent {
  @Input({ required: true }) projectCardFrontData!: ProjectCardFrontData;
}
