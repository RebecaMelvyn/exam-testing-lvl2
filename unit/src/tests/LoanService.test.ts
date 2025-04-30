import { describe, it, expect, beforeEach } from 'vitest';
import { LoanService } from '../LoanService';
import { Book } from '../Book';
import { User } from '../User';

describe('Service de prêt', () => {
    let loanService: LoanService;
    let book: Book;
    let user: User;

    beforeEach(() => {
        loanService = new LoanService();
        book = new Book('1', 'Livre Test', 'Auteur Test');
        user = new User('1', 'Utilisateur Test', 'test@example.com');

        loanService.addBook(book);
        loanService.addUser(user);
    });

    describe('Gestion des livres et utilisateurs', () => {
        it('devrait ajouter et récupérer un livre', () => {
            const retrievedBook = loanService.getBook('1');
            expect(retrievedBook).toBe(book);
        });

        it('devrait ajouter et récupérer un utilisateur', () => {
            const retrievedUser = loanService.getUser('1');
            expect(retrievedUser).toBe(user);
        });
    });

    describe('Processus d\'emprunt', () => {
        it('devrait emprunter un livre avec succès', () => {
            const borrowDate = new Date('2024-01-01');
            const success = loanService.borrowBook('1', '1', borrowDate);

            expect(success).toBe(true);
            expect(book.status).toBe('borrowed');
            expect(book.borrowedBy).toBe('1');
            expect(book.borrowDate).toEqual(borrowDate);
            expect(user.currentLoans).toContain('1');
        });

        it('ne devrait pas emprunter un livre inexistant', () => {
            const success = loanService.borrowBook('999', '1');
            expect(success).toBe(false);
        });

        it('ne devrait pas emprunter un livre à un utilisateur inexistant', () => {
            const success = loanService.borrowBook('1', '999');
            expect(success).toBe(false);
        });

        it('ne devrait pas emprunter un livre déjà emprunté', () => {
            loanService.borrowBook('1', '1');
            const anotherUser = new User('2', 'Autre Utilisateur', 'autre@example.com');
            loanService.addUser(anotherUser);

            const success = loanService.borrowBook('1', '2');
            expect(success).toBe(false);
        });
    });

    describe('Processus de retour', () => {
        it('devrait retourner un livre avec succès', () => {
            const borrowDate = new Date('2024-01-01');
            loanService.borrowBook('1', '1', borrowDate);

            const returnDate = new Date('2024-01-15');
            const penalty = loanService.returnBook('1', returnDate);

            expect(penalty).toBe(0);
            expect(book.status).toBe('available');
            expect(book.borrowedBy).toBeUndefined();
            expect(book.borrowDate).toBeUndefined();
            expect(book.dueDate).toBeUndefined();
            expect(user.currentLoans).not.toContain('1');
        });

        it('devrait calculer la pénalité pour un retour en retard', () => {
            const borrowDate = new Date('2024-01-01');
            loanService.borrowBook('1', '1', borrowDate);

            const returnDate = new Date('2024-01-20'); // 5 jours de retard
            const penalty = loanService.returnBook('1', returnDate);

            expect(penalty).toBe(2.5); // 5 jours * 0.50€
        });
    });

    describe('Requêtes de livres', () => {
        it('devrait obtenir les livres empruntés', () => {
            loanService.borrowBook('1', '1');
            const borrowedBooks = loanService.getBorrowedBooks();

            expect(borrowedBooks).toHaveLength(1);
            expect(borrowedBooks[0]).toBe(book);
        });

        it('should get available books', () => {
            const availableBooks = loanService.getAvailableBooks();
            expect(availableBooks).toHaveLength(1);
            expect(availableBooks[0]).toBe(book);
        });

        it('should get user loans', () => {
            loanService.borrowBook('1', '1');
            const userLoans = loanService.getUserLoans('1');

            expect(userLoans).toHaveLength(1);
            expect(userLoans[0]).toBe(book);
        });
    });
});
