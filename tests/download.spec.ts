import { test, expect } from '@playwright/test';
import { createDownloadPage } from '../pages/download.page';

// Testgruppe für die Dateidownload-Funktionalität.
test.describe('File Download Tests', () => {
  // Test: Überprüft den erfolgreichen Dateidownload und die Rückkehr zur Homepage.
  test('Verify file download and return to homepage', async ({ page }) => {

    const downloadPage = createDownloadPage(page);

    // Navigiere zur Download-Seite.
    await downloadPage.navigateTo('/download');

    // Starte den Dateidownload.
    const { downloadPath, fileName } = await downloadPage.downloadFile('myfile.pdf');

    // Überprüfe, ob der Dateipfad existiert (Dateidownload war erfolgreich).
    expect(downloadPath).toBeTruthy();

    // Überprüfe, ob der Dateiname korrekt ist.
  expect(fileName).toBe('myfile.pdf');

    // Kehre zur Homepage zurück.
    await downloadPage.navigateTo('/');
  });
});
