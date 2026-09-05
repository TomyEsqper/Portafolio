import { Component, HostListener, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Lang } from '../../core/i18n/i18n.types';
import { TranslationService } from '../../core/i18n/translation.service';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
})
export class SiteHeaderComponent {
  private readonly i18n = inject(TranslationService);

  menuOpen = false;
  scrolled = false;

  readonly lang = this.i18n.lang;
  readonly ui = this.i18n.ui;

  readonly links = computed(() => {
    const nav = this.i18n.ui().nav;
    return [
      { href: '/#about', label: nav.about },
      { href: '/#certificaciones', label: nav.certifications },
      { href: '/#recognitions', label: nav.recognitions },
      { href: '/#stack', label: nav.stack },
      { href: '/#projects', label: nav.projects },
      { href: '/#experience', label: nav.experience },
      { href: '/#education', label: nav.education },
      { href: '/#architecture', label: nav.architecture },
      { href: '/#contact', label: nav.contact },
    ];
  });

  setLang(lang: Lang): void {
    this.i18n.setLang(lang);
    this.closeMenu();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 24;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
