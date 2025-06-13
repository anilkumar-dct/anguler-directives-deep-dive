import { Component } from '@angular/core';
import { SafeLinkComponentComponent } from '../safe-link-component/safe-link-component.component';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [SafeLinkComponentComponent],
})
export class LearningResourcesComponent {}
