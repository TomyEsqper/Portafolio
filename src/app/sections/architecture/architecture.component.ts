import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-architecture',
  imports: [RevealDirective],
  templateUrl: './architecture.component.html',
  styleUrl: './architecture.component.scss',
})
export class ArchitectureComponent {
  private readonly i18n = inject(TranslationService);
  readonly ui = this.i18n.ui;
}
