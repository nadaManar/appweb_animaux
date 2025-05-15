import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { withInterceptors } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { jwtInterceptor } from './interceptor/jwt.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(),
    provideHttpClient(withInterceptors([jwtInterceptor]))
    
  ]
   
  
};
