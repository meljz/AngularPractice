import { Component } from '@angular/core';
import { GreetingsComponent } from '../component/greetings/greetings.component';
import { CounterComponent } from '../component/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingsComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { 
  keyupHandler(){
    console.log('hello this is key keyuphandler function ');
  }
}
