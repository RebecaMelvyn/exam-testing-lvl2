import { test, expect } from '@playwright/test';

test.describe('Glossaire', () => {
    test('devrait accéder au glossaire', async ({ page }) => {
        await page.goto('https://rubrr.s3-main.oktopod.app/');
        await page.waitForLoadState('domcontentloaded');

        // Cliquer sur le lien des questions
        await page.getByRole('link', { name: /Plus de \d+ questions/ }).click();
        await page.waitForLoadState('domcontentloaded');

        // Vérification de la page du glossaire
        await expect(page.getByRole('table')).toBeVisible();
    });

    test('devrait afficher les questions du glossaire', async ({ page }) => {
        await page.goto('https://rubrr.s3-main.oktopod.app/');
        await page.waitForLoadState('domcontentloaded');
        await page.getByRole('link', { name: /Plus de \d+ questions/ }).click();
        await page.waitForLoadState('domcontentloaded');

        // Vérification de la présence des questions
        const questions = await page.getByRole('row').all();
        expect(questions.length).toBeGreaterThan(1); // Plus que l'en-tête
    });

    test('devrait pouvoir voir les détails d\'une question', async ({ page }) => {
        await page.goto('https://rubrr.s3-main.oktopod.app/');
        await page.waitForLoadState('domcontentloaded');
        await page.getByRole('link', { name: /Plus de \d+ questions/ }).click();
        await page.waitForLoadState('domcontentloaded');

        // Cliquer sur une question
        await page.getByRole('row').nth(1).getByRole('link').click();
        await page.waitForLoadState('domcontentloaded');

        // Vérification des détails
        await expect(page.getByText('Réponse du système :')).toBeVisible();
        await expect(page.getByText('Autres questions dans ce thème')).toBeVisible();
    });
}); 