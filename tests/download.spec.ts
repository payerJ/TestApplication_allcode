import { test, expect } from '@playwright/test';
import DownloadPage from '../pages/download.page';

// Testgruppe für die Dateidownload-Funktionalität.
test.describe('File Download Tests', () => {
  // Test: Überprüft den erfolgreichen Dateidownload und die Rückkehr zur Homepage.
  test('Verify file download and return to homepage', async ({ page }) => {
    const downloadPage = new DownloadPage(page);

    // Navigiere zur Download-Seite.
    await downloadPage.navigateTo('/download');

    // Starte den Dateidownload.
    const filePath = await downloadPage.downloadFile();

    // Überprüfe, ob der Dateipfad existiert (Dateidownload war erfolgreich).
    expect(filePath).toBeTruthy();

    // Kehre zur Homepage zurück.
    await downloadPage.navigateTo('/');
  });
});
