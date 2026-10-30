import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { SkillCardComponent } from '../../ui/skill-card/skill-card.component';
import { SkillsFacade } from '../../application/skills.facade';
@Component({
  selector: 'app-skills',
  imports: [SkillCardComponent],
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  private readonly facade = inject(SkillsFacade);
  readonly skills = this.facade.skills;
  readonly tools = this.facade.tools;
  readonly architecture = this.facade.architecture;
}

