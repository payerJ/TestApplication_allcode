import { Page } from '@playwright/test';

// Factory Function für die Dropdown-Seite
export const DropdownPage = (page: Page) => {
  // Definiere Locators
  const dropdown = page.locator('#dropdown');
  const selectedOption = page.locator('#dropdown option:checked');

  // Rückgabe der Methoden
  return {
    // Methode zum Auswählen einer Option nach Wert
    async selectOptionByValue(value: string) {
      await dropdown.selectOption({ value });
    },

    // Methode zum Abrufen des Textes der aktuell ausgewählten Option
    async getSelectedOptionText(): Promise<string> {
      return (await selectedOption.textContent()) ?? ''; // Gib den Text der ausgewählten Option zurück
    },
  };
};
