import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, /*HomeComponent*/],
  template: `

  
  <app-header></app-header>

  <main>
     <router-outlet></router-outlet>
      <!--<app-home></app-home>-->
  </main>
 
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'practiceAngular';
  //content = 'Welcome to Angular with TypeScript!';
}
