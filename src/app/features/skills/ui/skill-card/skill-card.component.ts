import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Technology } from '../../../../shared/models/technology.model';
import { SvgComponent } from '../../../../shared/ui/svg/svg.component';

@Component({
  selector: 'app-skill-card',
  imports: [SvgComponent],
  templateUrl: './skill-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './skill-card.component.css',
})
export class SkillCardComponent {
  @Input({ required: true }) skill!: Technology;
}
