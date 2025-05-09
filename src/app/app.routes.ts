import { Routes } from '@angular/router';
import { StreamComponent } from './privado/stream/stream.component';
import { LoginComponent } from './publico/autenticacao/login/login.component';
import { RegisterComponent } from './publico/autenticacao/register/register.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: "", redirectTo: "login", pathMatch: "full" },	
            { path: "login", component: LoginComponent },
            { path: "register", component: RegisterComponent },
            { path: "video", component: StreamComponent }
        ]
    }
];
