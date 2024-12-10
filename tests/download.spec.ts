import { test, expect } from '@playwright/test';
import { DownloadPage } from '../pages/DownloadPage';

// Testgruppe für die Dateidownload-Funktionalität.
test.describe('File Download Tests', () => {
  // Test: Überprüft den erfolgreichen Dateidownload und die Rückkehr zur Homepage.
  test('Verify file download and return to homepage', async ({ page }) => {

    const downloadPage = DownloadPage(page);

    // Navigiere zur Download-Seite.
    await page.goto('/download');

    // Starte den Dateidownload.
    const { downloadPath, fileName } = await downloadPage.downloadFile('test.txt');

    // Überprüfe, ob der Dateipfad existiert (Dateidownload war erfolgreich).
    expect(downloadPath).toBeTruthy();

    // Überprüfe, ob der Dateiname korrekt ist.
  expect(fileName).toBe('test.txt');

    // Kehre zur Homepage zurück.
    await page.goto('/');
  });
});
