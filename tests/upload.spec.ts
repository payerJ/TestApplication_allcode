import { test, expect } from '@playwright/test';
import { createUploadPage } from '../pages/upload.page';

test.describe('File Upload Tests', () => {
  test('Verify file upload functionality', async ({ page }) => {
    const uploadPage = createUploadPage(page);

    // Navigiere zur Upload-Seite
    await uploadPage.navigateTo('/upload');

    // Lade eine Datei hoch
    const filePath = './test-data/sample-file.pdf'; // Beispielpfad zur Datei
    await uploadPage.uploadFile(filePath);

    // Verifiziere die Bestätigungsnachricht
    const confirmationText = await uploadPage.getConfirmationText();
    expect(confirmationText).toContain('File Uploaded!');
      // Navigiere zur Startseite.
    await uploadPage.navigateTo('/');
  });
});
