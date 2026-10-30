import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { SvgComponent } from '../../../shared/ui/svg/svg.component';

@Component({
  selector: 'app-responsive-menu',
  imports: [SvgComponent],
  templateUrl: './responsive-menu.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './responsive-menu.component.css',
})
export class ResponsiveMenuComponent {
  @ViewChild('toggle') private toggle?: ElementRef<HTMLButtonElement>;
  @Input() menuOpen = false;
  @Output() readonly menuToggle = new EventEmitter<void>();
  focus(): void {
    this.toggle?.nativeElement.focus();
  }
}
