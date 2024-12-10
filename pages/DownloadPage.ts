import { Page } from '@playwright/test';
import * as path from 'path'; // Für Dateipfade

// Factory Function für die Download-Seite
export const DownloadPage = (page: Page) => {
  // Methode zum Herunterladen einer Datei
  const downloadFile = async (fileName: string) => {
    const [download] = await Promise.all([
      page.waitForEvent("download"), // Warte auf das Download-Event
      page.click(`a[href*="${fileName}"]`), // Klicke auf den Link mit dem spezifischen Dateinamen
    ]);

    // Definiere den Zielpfad, an dem die Datei gespeichert werden soll
    const downloadPath = path.join(__dirname, `../downloads/${fileName}`);

    // Speichere die Datei am angegebenen Speicherort
    await download.saveAs(downloadPath);

    console.log(`Die Datei wurde heruntergeladen: ${fileName}`); // Ausgabe des Dateinamens
    console.log(`Die Datei wurde hier gespeichert: ${downloadPath}`); // Ausgabe des Speicherorts

    return { downloadPath, fileName }; // Rückgabe von Dateipfad und Dateiname
  };

  // Rückgabe der Methoden (kein redundanter Nesting oder doppelte Logik)
  return {
    downloadFile,
  };
};
