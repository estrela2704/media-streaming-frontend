import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-layout',
  imports: [   
    RouterOutlet, 
    MatSlideToggleModule,
    MatIconModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor(private themeService: ThemeService) {}

  get isDarkMode() {
    return this.themeService.isDarkMode();
  }

  toggleMode(){
    return this.themeService.toggle();
  }

}
