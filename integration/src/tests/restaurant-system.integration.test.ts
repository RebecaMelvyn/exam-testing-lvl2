import { describe, test, expect, beforeEach } from '@jest/globals';
import { RestaurantSystem } from '../RestaurantService';
import { ProductCategory, OrderStatus } from '../types';

describe('Tests d\'intégration du système de restaurant', () => {
    let system: RestaurantSystem;
    let customer: any;
    let pizza: any;
    let soda: any;

    beforeEach(() => {
        system = new RestaurantSystem();

        // Création d'un client
        customer = system.getCustomerService().createCustomer({
            name: 'Jean Dupont',
            email: 'jean@example.com',
            address: '123 Rue de Paris',
            phone: '0123456789'
        });

        // Création de produits
        pizza = system.getProductService().createProduct({
            name: 'Pizza Margherita',
            description: 'Pizza classique',
            price: 12.5,
            category: 'main' as ProductCategory,
            available: true,
            preparationTimeMinutes: 15
        });

        soda = system.getProductService().createProduct({
            name: 'Soda',
            description: 'Boisson gazeuse',
            price: 3.5,
            category: 'drink' as ProductCategory,
            available: true,
            preparationTimeMinutes: 1
        });
    });

    test('Le processus complet de commande devrait fonctionner correctement', () => {
        const result = system.processOrder(customer.id, [
            { productId: pizza.id, quantity: 1 },
            { productId: soda.id, quantity: 2 }
        ]);

        expect(result.order).toBeDefined();
        expect(result.invoice).toBeDefined();

        const order = result.order!;
        const invoice = result.invoice!;

        expect(order.customerId).toBe(customer.id);
        expect(order.status).toBe('pending');
        expect(order.items.length).toBe(2);
        expect(order.totalAmount).toBe(19.5);

        expect(invoice.orderId).toBe(order.id);
        expect(invoice.customerId).toBe(customer.id);
        expect(invoice.totalAmount).toBe(19.5);
        expect(invoice.tax).toBeCloseTo(1.95, 2);
        expect(invoice.paid).toBe(false);

        const paymentResult = system.getInvoiceService().payInvoice(invoice.id, 'credit_card');
        expect(paymentResult).toBe(true);

        const updatedInvoice = system.getInvoiceService().getInvoice(invoice.id);
        expect(updatedInvoice?.paid).toBe(true);
        expect(updatedInvoice?.paymentMethod).toBe('credit_card');
        expect(updatedInvoice?.paidAt).toBeDefined();

        const updatedCustomer = system.getCustomerService().getCustomer(customer.id);
        expect(updatedCustomer?.loyaltyPoints).toBe(1);
    });

    test('Une commande devrait échouer si un produit n\'est pas disponible', () => {
        const unavailableProduct = system.getProductService().createProduct({
            name: 'Produit Indisponible',
            description: 'Ce produit n\'est pas disponible',
            price: 10,
            category: 'main' as ProductCategory,
            available: false,
            preparationTimeMinutes: 10
        });

        const result = system.processOrder(customer.id, [
            { productId: unavailableProduct.id, quantity: 1 }
        ]);

        expect(result.order).toBeNull();
        expect(result.invoice).toBeNull();
    });

    test('Le changement de disponibilité d\'un produit devrait affecter les commandes', () => {
        const product = system.getProductService().createProduct({
            name: 'Produit Test',
            description: 'Produit pour test de disponibilité',
            price: 10,
            category: 'main' as ProductCategory,
            available: true,
            preparationTimeMinutes: 10
        });

        const result1 = system.processOrder(customer.id, [
            { productId: product.id, quantity: 1 }
        ]);
        expect(result1.order).toBeDefined();

        const unavailableProduct = system.getProductService().createProduct({
            name: 'Produit Indisponible',
            description: 'Ce produit n\'est pas disponible',
            price: 10,
            category: 'main' as ProductCategory,
            available: false,
            preparationTimeMinutes: 10
        });

        const result2 = system.processOrder(customer.id, [
            { productId: unavailableProduct.id, quantity: 1 }
        ]);
        expect(result2.order).toBeNull();
    });

    test('Le changement de statut d\'une commande devrait fonctionner correctement', () => {
        const result = system.processOrder(customer.id, [
            { productId: pizza.id, quantity: 1 }
        ]);

        const order = result.order!;
        expect(order.status).toBe('pending');

        system.getOrderService().updateOrderStatus(order.id, 'preparing');
        const updatedOrder1 = system.getOrderService().getOrder(order.id);
        expect(updatedOrder1?.status).toBe('preparing');

        system.getOrderService().updateOrderStatus(order.id, 'ready');
        const updatedOrder2 = system.getOrderService().getOrder(order.id);
        expect(updatedOrder2?.status).toBe('ready');
    });

    test('L\'annulation d\'une commande ne devrait être possible qu\'au statut "pending"', () => {
        const result = system.processOrder(customer.id, [
            { productId: pizza.id, quantity: 1 }
        ]);

        const order = result.order!;
        expect(system.getOrderService().cancelOrder(order.id)).toBe(true);

        const result2 = system.processOrder(customer.id, [
            { productId: pizza.id, quantity: 1 }
        ]);
        system.getOrderService().updateOrderStatus(result2.order!.id, 'preparing');
        expect(system.getOrderService().cancelOrder(result2.order!.id)).toBe(false);
    });

    test('Les calculs de montants et taxes devraient être cohérents', () => {
        const result = system.processOrder(customer.id, [
            { productId: pizza.id, quantity: 2 },
            { productId: soda.id, quantity: 3 }
        ]);

        const order = result.order!;
        const invoice = result.invoice!;

        const expectedTotal = (pizza.price * 2) + (soda.price * 3);
        expect(order.totalAmount).toBe(expectedTotal);
        expect(invoice.totalAmount).toBe(expectedTotal);

        const expectedTax = expectedTotal * 0.1;
        expect(invoice.tax).toBeCloseTo(expectedTax, 2);
    });
});