import { test, expect } from '@playwright/test';

test.describe('Questionnaire', () => {
    // test('devrait afficher une question aléatoire', async ({ page }) => {
    //     await page.goto('https://rubrr.s3-main.oktopod.app/');
    //     await page.waitForLoadState('domcontentloaded');

    //     await expect(page.getByRole('heading', { level: 2 })).toBeVisible();
    //     await expect(page.getByRole('textbox')).toBeVisible();
    //     await expect(page.getByRole('button', { name: 'Répondre' })).toBeVisible();
    // });

    // test('devrait afficher une erreur pour une réponse trop courte', async ({ page }) => {
    //     await page.goto('https://rubrr.s3-main.oktopod.app/');
    //     await page.waitForLoadState('domcontentloaded');

    //     await page.getByRole('textbox').fill('a');
    //     await page.getByRole('button', { name: 'Répondre' }).click();
    //     await page.waitForTimeout(1000);

    //     await expect(page.getByText(/trop court/i)).toBeVisible();
    // });

    test('devrait pouvoir répondre à une question', async ({ page }) => {
        await page.goto('https://rubrr.s3-main.oktopod.app/');
        await page.waitForLoadState('domcontentloaded');

        // Vérification des éléments de la question
        await expect(page.getByRole('heading', { name: 'Questions pour un CDA' })).toBeVisible();
        await expect(page.getByRole('textbox')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Répondre' })).toBeVisible();
    });

    test('devrait afficher le résultat de la réponse', async ({ page }) => {
        await page.goto('https://rubrr.s3-main.oktopod.app/');
        await page.waitForLoadState('domcontentloaded');

        // Saisie d'une réponse
        await page.getByRole('textbox').fill('Avec des CI/CD\n');
        await page.getByRole('button', { name: 'Répondre' }).click();
        await page.waitForLoadState('domcontentloaded');

        // Vérification des éléments de la réponse
        await expect(page.getByRole('heading', { name: /Votre réponse est :/ })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Réponse corrigée :' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Résultat de la question :' })).toBeVisible();
        await expect(page.getByText('Réponse de base du système :')).toBeVisible();
    });

    test('devrait pouvoir passer à une nouvelle question', async ({ page }) => {
        await page.goto('https://rubrr.s3-main.oktopod.app/');
        await page.waitForLoadState('domcontentloaded');

        // Répondre à la première question
        await page.getByRole('textbox').fill('Avec des CI/CD\n');
        await page.getByRole('button', { name: 'Répondre' }).click();
        await page.waitForLoadState('domcontentloaded');

        // Cliquer sur Nouvelle question
        await page.getByRole('link', { name: 'Nouvelle question' }).click();
        await page.waitForLoadState('domcontentloaded');

        // Vérification de la nouvelle question
        await expect(page.getByRole('heading', { name: 'Questions pour un CDA' })).toBeVisible();
        await expect(page.getByRole('textbox')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Répondre' })).toBeVisible();
    });

    test('devrait pouvoir répondre à plusieurs questions', async ({ page }) => {
        await page.goto('https://rubrr.s3-main.oktopod.app/');
        await page.waitForLoadState('domcontentloaded');

        // Première réponse
        await page.getByRole('textbox').fill('Oui');
        await page.getByRole('button', { name: 'Répondre' }).click();
        await page.waitForLoadState('domcontentloaded');

        // Deuxième réponse
        await page.getByRole('textbox').fill('les relations \n');
        await page.getByRole('button', { name: 'Répondre' }).click();
        await page.waitForLoadState('domcontentloaded');

        // Vérification des résultats
        await expect(page.getByRole('heading', { name: /Votre réponse est :/ })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Réponse corrigée :' })).toBeVisible();
    });

    // test('devrait afficher les questions similaires', async ({ page }) => {
    //     await page.goto('https://rubrr.s3-main.oktopod.app/');
    //     await page.waitForLoadState('domcontentloaded');

    //     // Saisie d'une réponse
    //     await page.getByRole('textbox').fill('Ceci est une réponse pour tester.');
    //     await page.getByRole('button', { name: 'Répondre' }).click();
    //     await page.waitForLoadState('domcontentloaded');

    //     // Vérification des questions similaires
    //     await expect(page.getByText('Autres questions dans ce thème')).toBeVisible();
    //     const similarQuestions = await page.getByRole('row').all();
    //     expect(similarQuestions.length).toBeGreaterThan(1);
    // });

    // test('devrait pouvoir naviguer entre les questions', async ({ page }) => {
    //     await page.goto('https://rubrr.s3-main.oktopod.app/');
    //     await page.waitForLoadState('domcontentloaded');

    //     // Saisie d'une réponse
    //     await page.getByRole('textbox').fill('Naviguons entre les questions.');
    //     await page.getByRole('button', { name: 'Répondre' }).click();
    //     await page.waitForLoadState('domcontentloaded');

    //     // Cliquer sur une question similaire
    //     await page.getByRole('row').nth(1).getByRole('link').click();
    //     await page.waitForLoadState('domcontentloaded');

    //     // Vérification de la nouvelle question
    //     await expect(page.getByText('Réponse du système :')).toBeVisible();
    // });
});
