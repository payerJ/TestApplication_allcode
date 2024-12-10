import { test, expect } from '@playwright/test';
import { createHomePage } from '../pages/home.page';

// Testgruppe für die Startseite.
test.describe('Home Page Tests', () => {
  // Test: Überprüfe die Überschrift auf der Startseite.
  test('Verify homepage heading', async ({ page }) => {
    const homePage = createHomePage(page);

    // Navigiere zur Startseite.
    await homePage.navigateTo('/');
    await homePage.verifyHeadingText('Welcome to the-internet'); // Verifiziere die Überschrift.
  });

  // Test: Überprüfe, ob die Navigationslinks sichtbar sind.
  test('Verify navigation links are visible', async ({ page }) => {
    const homePage = createHomePage(page);

    // Navigiere zur Startseite.
    await homePage.navigateTo('/');

    // Hole die Texte aller Navigationslinks.
    const navLinks = await homePage.page.locator('ul li a').allTextContents();

    // Verifiziere, dass bestimmte Links in der Navigation enthalten sind.
    expect(navLinks).toContain('A/B Testing');
    expect(navLinks).toContain('Add/Remove Elements');
    expect(navLinks).toContain('File Download');
  });
});
