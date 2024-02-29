import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme = 'light';

  constructor() {}

  getTheme() {
    return this.theme;
  }

  setTheme(theme: string) {
    this.theme = theme;
  }
}
