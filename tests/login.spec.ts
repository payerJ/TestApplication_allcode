import { test, expect } from '@playwright/test';
import {createLoginPage} from '../pages/login.page';

// Testgruppe für die Login-Seite.
test.describe('Login Tests', () => {
  // Test: Überprüfe einen erfolgreichen Login.
  test('Successful login', async ({ page }) => {
    const loginPage = createLoginPage(page);

    // Navigiere zur Login-Seite.
    await loginPage.navigateTo('/login');

    // Führe den Login mit gültigen Daten aus.
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    // Überprüfe, ob die Erfolgsmeldung sichtbar ist.
    await expect(loginPage.getSuccessMessage()).toBeVisible();

    // Navigiere zurück zur Homepage.
    await loginPage.navigateTo('/');
  });
   // Test: Überprüft, ob eine Fehlermeldung angezeigt wird, wenn falsche Login-Daten eingegeben werden
  test('Login with invalid credentials shows error', async ({ page }) => {
    const loginPage = createLoginPage(page);

    // Navigiere zur Login-Seite
    await loginPage.navigateTo('/login');

    // Führe den Login mit ungültigen Daten aus
    await loginPage.login('wrongUser', 'wrongPassword');

    // Überprüfe, ob die Fehlermeldung sichtbar ist und den richtigen Text enthält
    await expect(loginPage.getErrorMessage()).toBeVisible();
    await expect(loginPage.getErrorMessage()).toContainText('Your username is invalid!');
  });
});
