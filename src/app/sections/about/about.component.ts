import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { RevealDirective } from '../../shared/reveal.directive';
import { CertificationsComponent } from '../certifications/certifications.component';

@Component({
  selector: 'app-about',
  imports: [RevealDirective, CertificationsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly ui = inject(TranslationService).ui;
}
