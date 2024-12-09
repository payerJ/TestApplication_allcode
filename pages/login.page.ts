import { Locator, Page } from '@playwright/test';
import BasePage from './base.page';

// Die LoginPage-Klasse erweitert die BasePage und bietet spezifische Methoden für die Login-Seite.
export default class LoginPage extends BasePage {
  usernameInput: Locator; // Locator für das Eingabefeld für den Benutzernamen.
  passwordInput: Locator; // Locator für das Eingabefeld für das Passwort.
  loginButton: Locator; // Locator für den Login-Button.
  successMessage: Locator; // Locator für die Erfolgsmeldung.

  constructor(page: Page) {
    super(page);
    // Initialisiere die Locators für die Elemente auf der Login-Seite.
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.successMessage = page.locator('.success');
  }

  // Methode zum Ausführen des Login-Vorgangs.
  async login(username: string, password: string) {
    await this.usernameInput.fill(username); // Fülle das Feld für den Benutzernamen.
    await this.passwordInput.fill(password); // Fülle das Feld für das Passwort.
    await this.loginButton.click(); // Klicke auf den Login-Button.
  }
}

