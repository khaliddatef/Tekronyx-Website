import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',   // كل صفحة جديدة تبدأ من فوق
        anchorScrolling: 'enabled'          // لو استخدمت لينكات فيها #id
      })
    )
  ]
};
