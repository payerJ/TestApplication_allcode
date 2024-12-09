import { Locator, Page, expect } from '@playwright/test';
import BasePage from './base.page';

// Die HomePage-Klasse erweitert die BasePage und bietet Methoden für die Startseite.
export default class HomePage extends BasePage {
  heading: Locator; // Locator für die Hauptüberschrift (h1).

  constructor(page: Page) {
    super(page);
    // Initialisiere den Locator für die Überschrift.
    this.heading = page.locator('h1');
  }

  // Methode zur Überprüfung des Texts der Überschrift.
  async verifyHeadingText(expectedText: string) {
    await this.heading.waitFor(); // Warte, bis die Überschrift geladen ist.
    await this.heading.isVisible(); // Stelle sicher, dass die Überschrift sichtbar ist.
    expect(await this.heading.textContent()).toContain(expectedText); // Verifiziere den Text der Überschrift.
  }
}
