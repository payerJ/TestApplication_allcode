import { Page } from '@playwright/test';
import { createBasePage } from './base.page';

// Factory Function für die Login-Seite
export function createLoginPage(page: Page) {
  const basePage = createBasePage(page); // Basisfunktionen von BasePage einbinden

  // Locators für die Login-Seite
  const usernameInput = page.locator('#username'); // Eingabefeld für den Benutzernamen
  const passwordInput = page.locator('#password'); // Eingabefeld für das Passwort
  const loginButton = page.locator('button[type="submit"]'); // Login-Button
  const successMessage = page.locator('.success'); // Erfolgsmeldung
  const errorMessage = page.locator('.error'); // Fehlermeldung

  return {
    ...basePage, // Basisfunktionen (z. B. navigateTo) übernehmen

    // Methode zum Ausführen des Login-Vorgangs
    async login(username: string, password: string) {
      await usernameInput.fill(username); // Fülle das Feld für den Benutzernamen
      await passwordInput.fill(password); // Fülle das Feld für das Passwort
      await loginButton.click(); // Klicke auf den Login-Button
    },

    // Erfolgsmeldung abrufen
    getSuccessMessage: () => successMessage,

    // Fehlermeldung abrufen
    getErrorMessage: () => errorMessage,
  };
}
