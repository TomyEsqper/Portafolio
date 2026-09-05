import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private readonly i18n = inject(TranslationService);

  readonly profile = profile;
  readonly locale = this.i18n.content;
  readonly ui = this.i18n.ui;
}
