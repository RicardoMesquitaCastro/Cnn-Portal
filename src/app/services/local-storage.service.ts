import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
const APP_PREFIX = environment.nameStorage;

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  loadInitialState() {
    return Object.keys(sessionStorage).reduce((state: any, storageKey) => {
      if (storageKey.includes(APP_PREFIX)) {
        const stateKeys = storageKey
          .replace(APP_PREFIX, '')
          .toLowerCase()
          .split('.')
          .map((key) =>
            key
              .split('-')
              .map((token, index) =>
                index === 0
                  ? token
                  : token.charAt(0).toUpperCase() + token.slice(1)
              )
              .join('')
          );
        let currentStateRef = state;
        stateKeys.forEach((key, index) => {
          if (index === stateKeys.length - 1) {
            currentStateRef[key] = JSON.parse(
              sessionStorage.getItem(storageKey) || '{}'
            );
            return;
          }
          currentStateRef[key] = currentStateRef[key] || {};
          currentStateRef = currentStateRef[key];
        });
      }
      return state;
    }, {});
  }
  setItem(key: string, value: any) {
    sessionStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
  }

  getItem(key: string) {
    return JSON.parse(sessionStorage.getItem(`${APP_PREFIX}${key}`) || '{}');
  }

  setPolyce(key: string, value: any) {
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
  }

  getPolyce(key: string) {
    return JSON.parse(localStorage.getItem(`${APP_PREFIX}${key}`) || '{}');
  }

  removeItem(key: string) {
    sessionStorage.removeItem(`${APP_PREFIX}${key}`);
  }
}
