import { Page } from '@playwright/test';

// Diese Klasse dient als Basis für alle Seiten (Page Objects) in der Anwendung.
export default class BasePage {
  // Die Playwright-Page-Instanz wird hier gespeichert, um sie in Unterklassen zu verwenden.
  page: Page;

  // Konstruktor, der die Page-Instanz initialisiert. Diese wird bei der Instanziierung der Unterklasse übergeben.
  constructor(page: Page) {
    this.page = page;
  }

  // Diese Methode navigiert zu einer bestimmten URL.
  // Der Parameter "url" ist der relative oder absolute Pfad der Zielseite.
  async navigateTo(url: string) {
    await this.page.goto(url); // Öffnet die angegebene URL im Browser.
  }
}

