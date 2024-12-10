import { test, expect } from "@playwright/test";
import { createLoginPage } from "../pages/LoginPage";
import { createBasePage } from "../pages/BasePage";
// Testgruppe für die Login-Seite.
test.describe("Login Tests", () => {
  // Test: Überprüfe einen erfolgreichen Login.
  test("Successful login", async ({ page }) => {
    const loginPage = createLoginPage(page);
    const basePage = createBasePage(page);

    // Navigiere zur Login-Seite.
    await basePage.navigateTo("/login");

    // Führe den Login mit gültigen Daten aus.
    await loginPage.login("tomsmith", "SuperSecretPassword!");

    // Verifiziere die Erfolgsmeldung
    const successText = await loginPage.getSuccessMessageText();
    expect(successText).toContain("You logged into a secure area!");

    // Navigiere zurück zur Homepage.
    await basePage.navigateTo("/");
  });
  // Test: Überprüft, ob eine Fehlermeldung angezeigt wird, wenn falsche Login-Daten eingegeben werden
  test("Login with invalid credentials shows error", async ({ page }) => {
    const loginPage = createLoginPage(page);
    const basePage = createBasePage(page);
    // Navigiere zur Login-Seite
    await basePage.navigateTo("/login");

    // Führe den Login mit ungültigen Daten aus
    await loginPage.login("wrongUser", "wrongPassword");

    // Überprüfe, ob die Fehlermeldung sichtbar ist und den richtigen Text enthält
    const errorText = await loginPage.getErrorMessageText();

    expect (errorText).toContain("Your username is invalid!");
  });
});
