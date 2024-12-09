import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';

// Testgruppe für die Login-Seite.
test.describe('Login Tests', () => {
  // Test: Überprüfe einen erfolgreichen Login.
  test('Successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Navigiere zur Login-Seite.
    await loginPage.navigateTo('/login');

    // Führe den Login mit gültigen Daten aus.
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    // Überprüfe, ob die Erfolgsmeldung sichtbar ist.
    await expect(loginPage.successMessage).toBeVisible();

    // Navigiere zurück zur Homepage.
    await loginPage.navigateTo('/');
  });
});
