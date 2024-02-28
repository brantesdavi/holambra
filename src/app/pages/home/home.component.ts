import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  
  scrollToHome() {
    document.getElementById('home')?.scrollIntoView();
  }
}
