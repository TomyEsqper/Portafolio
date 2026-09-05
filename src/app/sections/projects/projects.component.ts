import { Component, computed, inject } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private readonly i18n = inject(TranslationService);

  readonly ui = this.i18n.ui;
  readonly projects = computed(() => this.i18n.content().projects);
}
