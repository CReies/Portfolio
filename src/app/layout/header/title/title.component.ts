import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './title.component.css',
})
export class TitleComponent {
  @Output() readonly homeSelected = new EventEmitter<void>();
}
