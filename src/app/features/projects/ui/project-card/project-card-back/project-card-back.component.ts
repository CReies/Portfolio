import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ProjectCardBackData } from '../project-card-back-data.model';

@Component({
  selector: 'app-project-card-back',
  imports: [],
  templateUrl: './project-card-back.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './project-card-back.component.css',
})
export class ProjectCardBackComponent {
  @Input({ required: true }) projectCardBackData!: ProjectCardBackData;
}
