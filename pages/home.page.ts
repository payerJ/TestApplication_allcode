import { Page, expect } from "@playwright/test";
import { createBasePage } from "./base.page";

// Factory Function für die Startseite (HomePage)
export function createHomePage(page: Page) {
  const basePage = createBasePage(page); // Basisfunktionen von BasePage einbinden

  // Locator für die Hauptüberschrift (h1)
  const heading = page.locator("h1");

  return {
    ...basePage, // Basisfunktionen (z. B. navigateTo) übernehmen
    page, // Füge die page-Instanz zum zurückgegebenen Objekt hinzu
    // Methode zur Überprüfung des Texts der Überschrift
    async verifyHeadingText(expectedText: string) {
      await heading.waitFor(); // Warte, bis die Überschrift geladen ist
      await heading.isVisible(); // Stelle sicher, dass die Überschrift sichtbar ist
      const actualText = await heading.textContent(); // Hole den Text der Überschrift
      expect(actualText).toContain(expectedText); // Verifiziere, dass der Text übereinstimmt
    },
  };
}
