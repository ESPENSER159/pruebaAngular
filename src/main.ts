import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { RecargaComponent } from './app/recarga/recarga.component';

bootstrapApplication(RecargaComponent, appConfig)
  .catch((err) => console.error(err));
