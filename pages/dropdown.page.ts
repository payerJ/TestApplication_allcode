import { Page } from '@playwright/test';
import { createBasePage } from './base.page';

export function createDropdownPage(page: Page) {
  const basePage = createBasePage(page); // Integriere Basisfunktionen

  const dropdown = page.locator('#dropdown');
  const selectedOption = page.locator('#dropdown option:checked');

  return {
    ...basePage, // Übernehme Basisfunktionen wie navigateTo
    async selectOptionByValue(value: string) {
      await dropdown.selectOption({ value });
    },
    async getSelectedOptionText(): Promise<string> {
      return (await selectedOption.textContent()) as string;
    },
  };
}
