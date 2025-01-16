import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

/**
 * Factory function to create a TranslateHttpLoader instance.
 * This loader is responsible for loading translation files from the specified path.
 *
 * @param {HttpClient} http - The HttpClient instance used to make HTTP requests.
 * @returns {TranslateHttpLoader} - A new instance of TranslateHttpLoader configured with the translation file path and extension.
 */
const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (
  http: HttpClient
) => new TranslateHttpLoader(http, './assets/i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'simple-crm-f58d7',
          appId: '1:441894599370:web:90a1f926e404b49d0a1233',
          storageBucket: 'simple-crm-f58d7.firebasestorage.app',
          apiKey: 'AIzaSyCFgfk6hu17koCrGpb-9zW-FUUhM_sGWXQ',
          authDomain: 'simple-crm-f58d7.firebaseapp.com',
          messagingSenderId: '441894599370',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom([TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    })])
  ],
};
