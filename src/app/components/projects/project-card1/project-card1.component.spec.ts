import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCard1Component } from './project-card1.component';

describe('ProjectCard1Component', () => {
  let component: ProjectCard1Component;
  let fixture: ComponentFixture<ProjectCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
