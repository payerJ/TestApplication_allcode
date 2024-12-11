import { test, expect } from '@playwright/test';
import { DropdownPage } from '@pages/DropdownPage';

// Testgruppe für das Dropdown-Menü.
test.describe('Dropdown Menu Tests', () => {
  let dropdownPage: ReturnType<typeof DropdownPage>;

  // Vor jedem Test: Initialisiere die DropdownPage und navigiere zur Seite.
  test.beforeEach(async ({ page }) => {
    dropdownPage = DropdownPage(page); // Erstelle eine Instanz mit der Factory Function
    await page.goto('/dropdown'); // Navigiere zur Dropdown-Seite über die playwright funktion page.goto
    await expect(page.locator('#dropdown')).toBeVisible(); // Stelle sicher, dass das Dropdown sichtbar ist.
  });

  // Test: Überprüfe die Standardoption im Dropdown-Menü.
  test('Verify default option is selected', async () => {
    const defaultOption = await dropdownPage.getSelectedOptionText();
    expect(defaultOption).toBe('Please select an option'); // Verifiziere die Standardoption.
  });

  // Test: Wähle eine Option aus und überprüfe, ob sie korrekt ausgewählt wurde.
  test('Select an option from the dropdown', async () => {
    await dropdownPage.selectOptionByValue('2'); // Wähle die Option mit dem Wert '2'.
    const selectedOption = await dropdownPage.getSelectedOptionText();
    expect(selectedOption).toBe('Option 2'); // Verifiziere die ausgewählte Option.
  });

  // Nach jedem Test: Kehre zur Homepage zurück.
  test.afterEach(async ({ page }) => {
       await page.goto('/');
       await page.screenshot;
 // Navigiere zur Homepage.
  });
});
