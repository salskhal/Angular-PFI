import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { LucideAngularModule, Menu } from 'lucide-angular';




@Component({
  selector: 'app-header',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  NAVIGATION = [
    {
      id: 1,
      label: 'Health',
      path: '#',
    },
    {
      id: 2,
      label: 'Investment',
      path: '#',
    },
    {
      id: 3,
      label: 'Insurance',
      path: '#',
    },
    {
      id: 4,
      label: 'Partnership',
      path: '#',
    },
    {
      id: 5,
      label: 'Corporate Site',
      path: '#',
    },
  ]

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  readonly MenuIcon = Menu


  logoUrl = 'assets/images/logo.png'

}
