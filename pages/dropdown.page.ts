import { Locator, Page } from '@playwright/test';
import BasePage from './base.page';

// Die DropdownPage-Klasse erweitert die BasePage und bietet Methoden für das Dropdown-Menü.
export default class DropdownPage extends BasePage {
  dropdown: Locator; // Locator für das Dropdown-Element.
  selectedOption: Locator; // Locator für die aktuell ausgewählte Option im Dropdown.

  constructor(page: Page) {
    super(page);
    // Initialisiere die Locators für das Dropdown-Menü.
    this.dropdown = page.locator('#dropdown');
    this.selectedOption = page.locator('#dropdown option:checked');
  }

  // Methode, um eine Option im Dropdown-Menü auszuwählen.
  async selectOptionByValue(value: string) {
    await this.dropdown.selectOption({ value }); // Wähle die Option basierend auf dem Wert.
  }

  // Methode, um den Text der aktuell ausgewählten Option zu erhalten.
  async getSelectedOptionText(): Promise<string> {
    return await this.selectedOption.textContent() as string; // Gib den Text der ausgewählten Option zurück.
  }
}
