import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-site-footer',
  imports: [],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
})
export class SiteFooterComponent {
  readonly year = new Date().getFullYear();
  readonly name = profile.fullName;
  readonly ui = inject(TranslationService).ui;
}
