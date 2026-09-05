import { Component, computed, inject } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-stack',
  imports: [RevealDirective],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss',
})
export class StackComponent {
  private readonly i18n = inject(TranslationService);

  readonly ui = this.i18n.ui;
  readonly groups = computed(() => this.i18n.content().stackGroups);
  readonly marqueeItems = computed(() =>
    this.i18n.content().stackGroups.flatMap((group) => group.items)
  );
}
