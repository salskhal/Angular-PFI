import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from '../terms/terms.component';
import { CalculatorComponent } from '../calculator/calculator.component';
import { PersonalDataComponent } from '../personal-data/personal-data.component';
import { OfferComponent } from '../offer/offer.component';
import { SummaryComponent } from '../summary/summary.component';
import { StepperComponent } from '../ui/stepper/stepper.component';
import { LucideAngularModule, ArrowLeft, ArrowRight } from 'lucide-angular';




@Component({
  selector: 'app-form-tabs',
  imports: [CommonModule, TermsComponent, CalculatorComponent, PersonalDataComponent, OfferComponent, SummaryComponent, StepperComponent, LucideAngularModule],
  templateUrl: './form-tabs.component.html',
  styleUrl: './form-tabs.component.css'
})
export class FormTabsComponent {

  readonly ArrowRight = ArrowRight
  readonly ArrowLeft = ArrowLeft

  tabs = ['Terms', 'Calculator', 'Form', 'Offer', 'Summary'];
  currentTab = 0;

  setCurrentTab(index: number) {
    this.currentTab = index;
  }

  nextTab() {
    if (this.currentTab < this.tabs.length - 1) {
      this.currentTab++;
    }
  }

  previousTab() {
    if (this.currentTab > 0) {
      this.currentTab--;
    }
  }

  declineOffer() {
    console.log('Offer declined.');
    // Add your logic here (e.g., redirect or show a message)
    this.previousTab()
  }

  acceptOffer() {
    console.log('Offer accepted.');
    // Add your logic here (e.g., proceed to the next step or finalize process)
    this.nextTab()
  }
}
