import { describe, it, expect } from 'vitest';
import { User } from '../User';

describe('Utilisateur', () => {
    describe('Constructeur', () => {
        it('devrait créer un utilisateur avec les valeurs initiales correctes', () => {
            const user = new User('1', 'Jean Dupont', 'jean@example.com');

            expect(user.id).toBe('1');
            expect(user.name).toBe('Jean Dupont');
            expect(user.email).toBe('jean@example.com');
            expect(user.category).toBe('standard');
            expect(user.currentLoans).toEqual([]);
        });

        it('devrait créer un utilisateur avec une catégorie spécifiée', () => {
            const user = new User('1', 'Jean Dupont', 'jean@example.com', 'premium');
            expect(user.category).toBe('premium');
        });
    });

    describe('Gestion des emprunts', () => {
        it('devrait ajouter un emprunt', () => {
            const user = new User('1', 'Jean Dupont', 'jean@example.com');
            user.addLoan('book1');
            expect(user.currentLoans).toContain('book1');
        });

        it('ne devrait pas ajouter d\'emprunts en double', () => {
            const user = new User('1', 'Jean Dupont', 'jean@example.com');
            user.addLoan('book1');
            user.addLoan('book1');
            expect(user.currentLoans).toHaveLength(1);
        });

        it('devrait supprimer un emprunt', () => {
            const user = new User('1', 'Jean Dupont', 'jean@example.com');
            user.addLoan('book1');
            user.removeLoan('book1');
            expect(user.currentLoans).not.toContain('book1');
        });
    });

    describe('Limites d\'emprunt', () => {
        it('devrait respecter la limite d\'emprunt d\'un utilisateur standard', () => {
            const user = new User('1', 'Jean Dupont', 'jean@example.com', 'standard');
            expect(user.canBorrow()).toBe(true);

            // Ajout de 3 livres (limite standard)
            user.addLoan('book1');
            user.addLoan('book2');
            user.addLoan('book3');

            expect(user.canBorrow()).toBe(false);
        });

        it('devrait respecter la limite d\'emprunt d\'un utilisateur premium', () => {
            const user = new User('1', 'Jean Dupont', 'jean@example.com', 'premium');

            // Ajout de 5 livres (limite premium)
            for (let i = 1; i <= 5; i++) {
                user.addLoan(`book${i}`);
            }

            expect(user.canBorrow()).toBe(false);
        });

        it('devrait respecter la limite d\'emprunt d\'un employé', () => {
            const user = new User('1', 'Jean Dupont', 'jean@example.com', 'employee');

            // Ajout de 8 livres (limite employee)
            for (let i = 1; i <= 8; i++) {
                user.addLoan(`book${i}`);
            }

            expect(user.canBorrow()).toBe(false);
        });
    });
});
