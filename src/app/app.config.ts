import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "simple-crm-f58d7", "appId": "1:441894599370:web:90a1f926e404b49d0a1233", "storageBucket": "simple-crm-f58d7.firebasestorage.app", "apiKey": "AIzaSyCFgfk6hu17koCrGpb-9zW-FUUhM_sGWXQ", "authDomain": "simple-crm-f58d7.firebaseapp.com", "messagingSenderId": "441894599370" }))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
