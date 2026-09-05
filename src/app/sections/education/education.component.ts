import { Component, computed, inject } from '@angular/core';

import { TranslationService } from '../../core/i18n/translation.service';

import { RevealDirective } from '../../shared/reveal.directive';

import { EducationInstitution } from '../../data/profile';

import { initials } from '../../shared/initials';



@Component({

  selector: 'app-education',

  imports: [RevealDirective],

  templateUrl: './education.component.html',

  styleUrl: './education.component.scss',

})

export class EducationComponent {

  private readonly i18n = inject(TranslationService);



  readonly ui = this.i18n.ui;

  readonly schools = computed(() => this.i18n.content().education);

  readonly initials = initials;



  isMultiProgram(school: EducationInstitution): boolean {

    return school.programs.length > 1;

  }

}

