import { test, expect } from '@playwright/test';
import UploadPage from '../pages/upload.page';

// Testgruppe für die Datei-Upload-Funktionalität.
test.describe('File Upload Tests', () => {
  // Test: Überprüft die Funktionalität des Datei-Uploads.
  test('Verify file upload functionality', async ({ page }) => {
    const uploadPage = new UploadPage(page);

    // Navigiere zur Upload-Seite.
    await uploadPage.navigateTo('/upload');

    // Datei zum Hochladen auswählen.
    const filePath = './test-data/sample-file.pdf'; // Relativer Pfad zur Testdatei.
    await uploadPage.uploadFile(filePath); // Führe den Datei-Upload aus.

    // Überprüfe die Bestätigungsnachricht.
    const confirmationText = await uploadPage.getConfirmationText();
    expect(confirmationText).toContain('File Uploaded!'); // Verifiziere die Erfolgsmeldung.
  });
});
