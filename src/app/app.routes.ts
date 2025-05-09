import { Routes } from '@angular/router';
import { StreamComponent } from './privado/stream/stream.component';
import { LoginComponent } from './publico/autenticacao/login/login.component';
import { CadastroComponent } from './publico/autenticacao/cadastro/cadastro.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "cadastro", component: CadastroComponent },
    { path: "video", component: StreamComponent }
];
