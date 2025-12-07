import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
//mport { RouterLink } from '@angular/router';
  


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = signal('Jay!');
  //content = 'This is header component';

}
