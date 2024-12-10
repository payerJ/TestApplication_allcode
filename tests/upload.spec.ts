import { test, expect } from '@playwright/test';
import { createUploadPage } from '../pages/UploadPage';
import { createBasePage } from "../pages/BasePage";

test.describe('File Upload Tests', () => {
  test('Verify file upload functionality', async ({ page }) => {
    const uploadPage = createUploadPage(page);
    const basePage =createBasePage(page);

    // Navigiere zur Upload-Seite
    await basePage.navigateTo('/upload');

    // Lade eine Datei hoch
    const filePath = './test-data/sample-file.pdf'; // Beispielpfad zur Datei
    await uploadPage.uploadFile(filePath);

    // Verifiziere die Bestätigungsnachricht
    const confirmationText = await uploadPage.getConfirmationText();
    expect(confirmationText).toContain('File Uploaded!');
      // Navigiere zur Startseite.
    await basePage.navigateTo('/');
  });
});
