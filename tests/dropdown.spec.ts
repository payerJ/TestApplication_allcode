import { test, expect } from '@playwright/test';
import DropdownPage from '../pages/dropdown.page';

// Testgruppe für das Dropdown-Menü.
test.describe('Dropdown Menu Tests', () => {
  let dropdownPage: DropdownPage; // Variable für die DropdownPage-Instanz.

  // Vor jedem Test: Initialisiere die DropdownPage und navigiere zur Seite.
  test.beforeEach(async ({ page }) => {
    dropdownPage = new DropdownPage(page);
    await dropdownPage.navigateTo('/dropdown'); // Navigiere zur Dropdown-Seite.
    await expect(dropdownPage.dropdown).toBeVisible(); // Stelle sicher, dass das Dropdown sichtbar ist.
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
    dropdownPage = new DropdownPage(page);
    await dropdownPage.navigateTo('/'); // Navigiere zur Homepage.
  });
});
