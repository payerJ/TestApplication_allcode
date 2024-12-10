import { Page } from '@playwright/test';

// Factory Function, die grundlegende Funktionen für Seiten bereitstellt
export function createBasePage(page: Page) {
  return {
    // Methode zum Navigieren zu einer bestimmten URL
    async navigateTo(url: string) {
      await page.goto(url); // Öffnet die angegebene URL im Browser
    },
  };
}
