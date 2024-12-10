import { Page } from '@playwright/test';


// Factory Function für die Login-Seite
export function createLoginPage(page: Page) {

  // Locators für die Login-Seite
  const usernameInput = page.locator('#username'); // Eingabefeld für den Benutzernamen
  const passwordInput = page.locator('#password'); // Eingabefeld für das Passwort
  const loginButton = page.locator('button[type="submit"]'); // Login-Button
  const successMessage = page.locator('.success'); // Erfolgsmeldung
  const errorMessage = page.locator('.error'); // Fehlermeldung

  // Rückgabe der Methoden
  return {
    // Methode zum Ausführen des Login-Vorgangs
    async login(username: string, password: string) {
      await usernameInput.fill(username); // Fülle das Feld für den Benutzernamen
      await passwordInput.fill(password); // Fülle das Feld für das Passwort
      await loginButton.click(); // Klicke auf den Login-Button
    },

    // Methode zum Abrufen der Erfolgsmeldung
    async getSuccessMessageText(): Promise<string> {
      return (await successMessage.textContent()) ?? ''; // Gib den Text der Erfolgsmeldung zurück
    },

    // Methode zum Abrufen der Fehlermeldung
    async getErrorMessageText(): Promise<string> {
      return (await errorMessage.textContent()) ?? ''; // Gib den Text der Fehlermeldung zurück
    },
  };
}