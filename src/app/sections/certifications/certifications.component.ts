import {

  AfterViewInit,

  Component,

  ElementRef,

  OnDestroy,

  computed,

  inject,

  signal,

  viewChild,

} from '@angular/core';

import { TranslationService } from '../../core/i18n/translation.service';

import {

  CertificationWithIssuer,

  flattenCertifications,

} from '../../data/certifications';

import { initials } from '../../shared/initials';



@Component({

  selector: 'app-certifications',

  imports: [],

  templateUrl: './certifications.component.html',

  styleUrl: './certifications.component.scss',

})

export class CertificationsComponent implements AfterViewInit, OnDestroy {

  private readonly i18n = inject(TranslationService);

  private readonly wallTrack = viewChild<ElementRef<HTMLElement>>('wallTrack');



  readonly ui = this.i18n.ui;

  readonly wallCerts = computed(() =>

    flattenCertifications(this.i18n.content().certifications)

  );

  readonly initials = initials;

  readonly selectedId = signal<string | null>(null);

  readonly paused = signal(false);

  readonly brokenImages = signal<Set<string>>(new Set());

  readonly imageOrientations = signal<Map<string, 'portrait' | 'landscape' | 'square'>>(

    new Map()

  );



  readonly selectedCert = computed(() =>

    this.wallCerts().find((cert) => cert.id === this.selectedId()) ?? null

  );



  readonly totalCerts = computed(() => this.wallCerts().length);



  readonly certLead = computed(() =>

    this.ui().certifications.lead.replace('{{count}}', String(this.totalCerts()))

  );



  private dragState: { active: boolean; startX: number; scrollLeft: number } | null = null;



  ngAfterViewInit(): void {

    const track = this.wallTrack()?.nativeElement;

    if (!track) return;



    track.addEventListener('mousedown', this.onDragStart);

    track.addEventListener('mousemove', this.onDragMove);

    window.addEventListener('mouseup', this.onDragEnd);

    track.addEventListener('mouseleave', this.onDragEnd);

  }



  ngOnDestroy(): void {

    const track = this.wallTrack()?.nativeElement;

    if (track) {

      track.removeEventListener('mousedown', this.onDragStart);

      track.removeEventListener('mousemove', this.onDragMove);

      track.removeEventListener('mouseleave', this.onDragEnd);

    }

    window.removeEventListener('mouseup', this.onDragEnd);

  }



  private readonly onDragStart = (event: MouseEvent): void => {

    const track = this.wallTrack()?.nativeElement;

    if (!track || (event.target as HTMLElement).closest('.cert-frame')) return;



    this.dragState = {

      active: true,

      startX: event.pageX - track.offsetLeft,

      scrollLeft: track.scrollLeft,

    };

    track.classList.add('cert-wall__viewport--dragging');

  };



  private readonly onDragMove = (event: MouseEvent): void => {

    if (!this.dragState?.active) return;

    const track = this.wallTrack()?.nativeElement;

    if (!track) return;



    event.preventDefault();

    const x = event.pageX - track.offsetLeft;

    const walk = x - this.dragState.startX;

    track.scrollLeft = this.dragState.scrollLeft - walk;

  };



  private readonly onDragEnd = (): void => {

    this.dragState = null;

    this.wallTrack()?.nativeElement.classList.remove('cert-wall__viewport--dragging');

  };



  shortIssuer(org: string): string {

    return org.split('—')[0].split('·')[0].trim();

  }



  shortTitle(title: string): string {

    return title.length > 42 ? `${title.slice(0, 42)}…` : title;

  }



  isSelected(cert: CertificationWithIssuer): boolean {

    return this.selectedId() === cert.id;

  }



  toggleSelect(cert: CertificationWithIssuer): void {

    const next = this.selectedId() === cert.id ? null : cert.id;

    this.selectedId.set(next);



    if (next) {

      requestAnimationFrame(() => {

        document.getElementById(`cert-frame-${cert.id}`)?.scrollIntoView({

          behavior: 'smooth',

          inline: 'center',

          block: 'nearest',

        });

      });

    }

  }



  clearSelection(): void {

    this.selectedId.set(null);

  }



  imageBroken(certId: string): boolean {

    return this.brokenImages().has(certId);

  }



  onImageError(certId: string): void {

    this.brokenImages.update((set) => new Set(set).add(certId));

  }



  orientation(certId: string): 'portrait' | 'landscape' | 'square' {

    return this.imageOrientations().get(certId) ?? 'portrait';

  }



  onImageLoad(event: Event, certId: string): void {

    const img = event.target as HTMLImageElement;

    if (!img.naturalWidth || !img.naturalHeight) return;



    const ratio = img.naturalWidth / img.naturalHeight;

    let orient: 'portrait' | 'landscape' | 'square' = 'square';

    if (ratio > 1.12) orient = 'landscape';

    else if (ratio < 0.88) orient = 'portrait';



    this.imageOrientations.update((map) => new Map(map).set(certId, orient));

  }

}

