import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormTabsComponent } from './components/form-tabs/form-tabs.component';



@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FormTabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bfc-axa';

  coverPath = 'assets/images/cover.png'

}


// "assets": [
//   {
//     "glob": "**/*",
//     "input": "public"
//   }
// ],