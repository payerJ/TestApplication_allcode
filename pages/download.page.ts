import BasePage from "./base.page";

// Die DownloadPage-Klasse erweitert die BasePage und bietet eine Methode zum Herunterladen von Dateien.
export default class DownloadPage extends BasePage {
  // Methode zum Herunterladen einer Datei.
  async downloadFile() {
    const [download] = await Promise.all([
      this.page.waitForEvent("download"), // Warte auf das Download-Event.
      this.page.click('a[href*="download/fileUpload.jpg"]'), // Klicke auf den Download-Link.
    ]);
    const filePath = await download.path(); // Hole den Pfad der heruntergeladenen Datei.
    console.log(`Die Datei wurde hier gespeichert: ${filePath}`); // Ausgabe des Speicherorts.
    return filePath; // Rückgabe des Dateipfads.
  }
}
