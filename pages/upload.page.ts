import { Page, Locator } from '@playwright/test';
import BasePage from './base.page';

// Die UploadPage-Klasse erweitert die BasePage und bietet spezifische Methoden für die Datei-Upload-Seite.
export default class UploadPage extends BasePage {
  private fileInput: Locator; // Locator für das Datei-Upload-Feld.
  private uploadButton: Locator; // Locator für den Upload-Button.
  private confirmationMessage: Locator; // Locator für die Bestätigungsnachricht.

  constructor(page: Page) {
    super(page);
    // Initialisiere die Locators.
    this.fileInput = page.locator('#file-upload'); // ID des Datei-Upload-Feldes.
    this.uploadButton = page.locator('#file-submit'); // ID des Upload-Buttons.
    this.confirmationMessage = page.locator('div.example h3'); // Bestätigungsnachricht.
  }

  // Methode zum Hochladen einer Datei.
  async uploadFile(filePath: string) {
    await this.fileInput.setInputFiles(filePath); // Datei auswählen.
    await this.uploadButton.click(); // Klicke auf den Upload-Button.
  }

  // Methode zum Abrufen des Bestätigungstexts.
  async getConfirmationText(): Promise<string> {
    return (await this.confirmationMessage.textContent()) ?? ''; // Gib den Text der Bestätigung zurück.
  }
}
