import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { RevealDirective } from '../../shared/reveal.directive';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly profile = profile;
  readonly ui = inject(TranslationService).ui;
  readonly telHref = `tel:${profile.phone.replace(/\s/g, '')}`;
}
