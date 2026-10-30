import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './features/home/home.component';
import { ProjectsComponent } from './features/projects/containers/projects/projects.component';
import { ThemeService } from './core/theme/theme.service';
import { SkillsComponent } from './features/skills/containers/skills/skills.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ExperienceComponent } from './features/experience/containers/experience.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    FooterComponent,
    ExperienceComponent,
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly theme = inject(ThemeService).theme;
}
