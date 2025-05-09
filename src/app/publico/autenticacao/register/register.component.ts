import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../../service/theme.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  codigoEnviado = false;

  constructor(private themeService: ThemeService) {}
  
  get isDarkMode() {
    return this.themeService.isDarkMode();
  }
  
  enviarCodigo() {
    this.codigoEnviado = true;
  }
}
