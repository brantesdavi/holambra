import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  isVisible = false;

  toggleNavigation() {
    this.isVisible = !this.isVisible;
    document.getElementById('nav-container')?.classList.toggle('hidden');
  }

  scrollTo(url: string) {
    document.getElementById(url)?.scrollIntoView();
  }
}
