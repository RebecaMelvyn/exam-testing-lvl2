import { describe, it, expect } from 'vitest';
import { Book } from '../Book';

describe('Livre', () => {
    describe('Constructeur', () => {
        it('devrait créer un livre avec les valeurs initiales correctes', () => {
            const book = new Book('1', 'Le Petit Prince', 'Antoine de Saint-Exupéry');

            expect(book.id).toBe('1');
            expect(book.title).toBe('Le Petit Prince');
            expect(book.author).toBe('Antoine de Saint-Exupéry');
            expect(book.status).toBe('available');
            expect(book.borrowedBy).toBeUndefined();
            expect(book.borrowDate).toBeUndefined();
            expect(book.dueDate).toBeUndefined();
        });
    });

    describe('Méthodes de statut', () => {
        it('devrait correctement identifier un livre disponible', () => {
            const book = new Book('1', 'Test', 'Auteur');
            expect(book.isAvailable()).toBe(true);
        });

        it('devrait correctement identifier un livre emprunté', () => {
            const book = new Book('1', 'Test', 'Auteur');
            book.status = 'borrowed';
            expect(book.isBorrowed()).toBe(true);
        });

        it('devrait correctement identifier un livre en maintenance', () => {
            const book = new Book('1', 'Test', 'Auteur');
            book.status = 'maintenance';
            expect(book.isInMaintenance()).toBe(true);
        });
    });
});
