import { Component, computed, inject, signal } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { LocalizedRecognition } from '../../core/i18n/i18n.types';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-recognitions',
  imports: [RevealDirective],
  templateUrl: './recognitions.component.html',
  styleUrl: './recognitions.component.scss',
})
export class RecognitionsComponent {
  private readonly i18n = inject(TranslationService);

  readonly ui = this.i18n.ui;
  readonly recognitions = computed(() => this.i18n.content().recognitions);
  readonly selectedId = signal<string | null>(this.i18n.content().recognitions[0]?.id ?? null);

  readonly selectedRecognition = computed(
    () =>
      this.recognitions().find((recognition) => recognition.id === this.selectedId()) ??
      this.recognitions()[0] ??
      null
  );

  selectRecognition(recognition: LocalizedRecognition): void {
    this.selectedId.set(recognition.id);
  }

  isSelected(recognition: LocalizedRecognition): boolean {
    return this.selectedId() === recognition.id;
  }
}
