import { Component, Inject } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../../service/theme.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private themeService: ThemeService) {}

  get isDarkMode() {
    return this.themeService.isDarkMode();
  }
}
