import { Component, computed, inject } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { RevealDirective } from '../../shared/reveal.directive';
import { initials } from '../../shared/initials';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  private readonly i18n = inject(TranslationService);

  readonly ui = this.i18n.ui;
  readonly companies = computed(() => this.i18n.content().experience);
  readonly initials = initials;
}
