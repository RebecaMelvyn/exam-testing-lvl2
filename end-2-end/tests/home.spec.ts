import { test, expect } from '@playwright/test';

test.describe('Page d\'accueil', () => {
    test('devrait charger la page d\'accueil correctement', async ({ page }) => {
        await page.goto('https://rubrr.s3-main.oktopod.app/');
        await page.waitForLoadState('domcontentloaded');

        // Vérification des éléments principaux
        await expect(page.getByRole('link', { name: 'RUBRR' })).toBeVisible();
        await expect(page.getByRole('textbox')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Répondre' })).toBeVisible();
    });

    test('devrait afficher les questions disponibles', async ({ page }) => {
        await page.goto('https://rubrr.s3-main.oktopod.app/');
        await page.waitForLoadState('domcontentloaded');

        // Vérification de la présence des questions
        const questions = await page.getByRole('link', { name: /Plus de \d+ questions/ }).all();
        expect(questions.length).toBeGreaterThan(0);
    });
}); 