import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const THEME_KEY = 'APP_THEME';

@Injectable({ providedIn: 'root' })
export class ThemeService {

  private themeDark = new BehaviorSubject<boolean>(false);

  get darkTheme$() {
    const theme = JSON.parse(window.localStorage.getItem(THEME_KEY));
    this.themeDark.next(theme);
    return this.themeDark.asObservable();
  }

  toggleTheme(): void {
    window.localStorage.setItem(THEME_KEY, JSON.stringify(!this.themeDark.value));
    this.themeDark.next(!this.themeDark.value);
  }

  setTheme(isDark: boolean): void {

    window.localStorage.setItem(THEME_KEY, JSON.stringify(isDark));
    this.themeDark.next(isDark);
  }
}
