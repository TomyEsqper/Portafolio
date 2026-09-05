import { Injectable, computed, signal } from '@angular/core';
import { Lang, LocaleContent } from './i18n.types';
import { es } from './locales/es';
import { en } from './locales/en';

const STORAGE_KEY = 'portfolio-lang';

const LOCALES: Record<Lang, LocaleContent> = { es, en };

@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly lang = signal<Lang>(this.readStoredLang());

  readonly content = computed(() => LOCALES[this.lang()]);

  readonly ui = computed(() => this.content().ui);

  setLang(lang: Lang): void {
    if (this.lang() === lang) return;
    this.lang.set(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    this.applyDocumentLang(lang);
  }

  toggleLang(): void {
    this.setLang(this.lang() === 'es' ? 'en' : 'es');
  }

  init(): void {
    this.applyDocumentLang(this.lang());
  }

  private readStoredLang(): Lang {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'en' ? 'en' : 'es';
  }

  private applyDocumentLang(lang: Lang): void {
    const { meta } = LOCALES[lang];
    document.documentElement.lang = lang;
    document.title = meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', meta.description);
    }
  }
}
