import { CommonModule, } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-stepper',
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {
  @Input() steps: string[] = [];
  @Input() currentStep: number = 0;
}
