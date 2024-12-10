import { Page, expect } from "@playwright/test";


// Factory Function für die Startseite (HomePage)
export function HomePage(page: Page) {
 
  // Locator für die Hauptüberschrift (h1)
  const heading = page.locator("h1");


  // Rückgabe der Methoden
 return {
    // Methode zur Navigation (wenn nötig, direkt verwenden)
    async navigateTo(url: string) {
      await page.goto(url); // Navigiere zur angegebenen URL
    },

    // Methode zur Überprüfung des Texts der Überschrift
    async verifyHeadingText(expectedText: string) {
      await heading.waitFor(); // Warte, bis die Überschrift geladen ist
      await heading.isVisible(); // Stelle sicher, dass die Überschrift sichtbar ist
      const actualText = await heading.textContent(); // Hole den Text der Überschrift
      expect(actualText).toContain(expectedText); // Verifiziere, dass der Text übereinstimmt
    },
  };
}
