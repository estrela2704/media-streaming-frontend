import { Routes } from '@angular/router';
import { StreamComponent } from './privado/stream/stream.component';

export const routes: Routes = [
    {path: "video/:filename", component: StreamComponent}
];
