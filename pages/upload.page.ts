import { Page } from '@playwright/test';
import { createBasePage } from './base.page';

// Factory Function für die Datei-Upload-Seite
export function createUploadPage(page: Page) {
  const basePage = createBasePage(page); // Basisfunktionen von BasePage einbinden

  // Locators für die Upload-Seite
  const fileInput = page.locator('#file-upload'); // Datei-Upload-Feld
  const uploadButton = page.locator('#file-submit'); // Upload-Button
  const confirmationMessage = page.locator('div.example h3'); // Bestätigungsnachricht

  return {
    ...basePage, // Basisfunktionen (z. B. navigateTo) übernehmen

    // Methode zum Hochladen einer Datei
    async uploadFile(filePath: string) {
      await fileInput.setInputFiles(filePath); // Datei auswählen
      await uploadButton.click(); // Klicke auf den Upload-Button
    },

    // Methode zum Abrufen des Bestätigungstexts
    async getConfirmationText(): Promise<string> {
      return (await confirmationMessage.textContent()) ?? ''; // Gib den Text der Bestätigung zurück
    },
  };
}
