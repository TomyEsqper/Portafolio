import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { AboutComponent } from '../../sections/about/about.component';
import { RecognitionsComponent } from '../../sections/recognitions/recognitions.component';
import { StackComponent } from '../../sections/stack/stack.component';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { ExperienceComponent } from '../../sections/experience/experience.component';
import { EducationComponent } from '../../sections/education/education.component';
import { ArchitectureComponent } from '../../sections/architecture/architecture.component';
import { ContactComponent } from '../../sections/contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AboutComponent,
    RecognitionsComponent,
    StackComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ArchitectureComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
