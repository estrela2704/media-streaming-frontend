import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDarkMode = signal(false);
  
  toggle() {
    console.log(this.isDarkMode());
    this.isDarkMode.update(v => !v);
  }
}
