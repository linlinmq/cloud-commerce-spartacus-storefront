import { cart, product, user } from '../sample-data/checkout-flow';
import { login, register } from './auth-forms';
import { fillPaymentDetails, fillShippingAddress } from './checkout-forms';

export function signOut() {
  cy.selectUserMenuOption('Sign Out');
}

export function registerUser() {
  cy.getByText(/Sign in \/ Register/i).click();
  cy.getByText('Register').click();
  register(user);
  cy.get('.cx-login-greet').should('contain', user.fullName);
}

export function signOutUser() {
  signOut();
  cy.get('.cx-login-greet').should('not.contain', user.fullName);
}

export function goToProductDetailsPage() {
  cy.visit('/');
  // click big banner
  cy.get('.Section1 cx-banner')
    .first()
    .find('img')
    .click({ force: true });
  // click small banner number 6 (would be good if label or alt text would be available)
  cy.get('.Section2 cx-banner:nth-of-type(6) img').click({ force: true });
  cy.get('cx-product-summary').within(() => {
    cy.get('.name').should('contain', product.name);
    cy.get('.code').should('contain', product.code);
  });
}

export function addProductToCart() {
  cy.get('cx-item-counter')
    .getByText('+')
    .click();
  cy.get('cx-add-to-cart')
    .getByText(/Add To Cart/i)
    .click();
  cy.get('cx-added-to-cart-dialog').within(() => {
    cy.get('.cx-name .cx-link').should('contain', product.name);
    cy.getByText(/proceed to checkout/i).click();
  });
  // Verify the user is prompted to login
  login(user.email, user.password);
}

export function fillAddressForm() {
  // TODO: Remove this behavior when redirect will work correctly
  cy.get('cx-product-page');
  cy.get('cx-mini-cart a').click();
  cy.get('cx-cart-details');
  cy.get('.btn.btn-primary').click();
  cy.get('.cx-checkout-title').should('contain', 'Shipping Address');
  cy.get('cx-order-summary .cx-summary-partials .cx-summary-row')
    .first()
    .find('.cx-summary-amount')
    .should('contain', '$2,623.08');

  fillShippingAddress(user);
}

export function chooseDeliveryMethod() {
  cy.get('.cx-checkout-title').should('contain', 'Shipping Method');
  cy.get('#deliveryMode-standard-gross').check({ force: true });
  cy.get('button.btn-primary').click();
}

export function fillPaymentForm() {
  cy.get('.cx-checkout-title').should('contain', 'Payment');
  cy.get('cx-order-summary .cx-summary-partials .cx-summary-total')
    .find('.cx-summary-amount')
    .should('contain', cart.total);

  fillPaymentDetails(user);
}

export function placeOrder() {
  cy.get('.cx-review-title').should('contain', 'Review');
  cy.get('.cx-review-summary-card')
    .contains('cx-card', 'Ship To')
    .find('.cx-card-container')
    .within(() => {
      cy.getByText(user.fullName);
      cy.getByText(user.address.line1);
      cy.getByText(user.address.line2);
    });
  cy.get('.cx-review-summary-card')
    .contains('cx-card', 'Shipping Method')
    .find('.cx-card-container')
    .within(() => {
      cy.getByText('Standard Delivery');
    });
  cy.get('cx-order-summary .cx-summary-total .cx-summary-amount').should(
    'contain',
    cart.total
  );
  cy.getByText('Terms & Conditions')
    .should('have.attr', 'target', '_blank')
    .should('have.attr', 'href', '/electronics-spa/en/USD/termsAndConditions');
  cy.get('.form-check-input').check();
  cy.get('cx-place-order button.btn-primary').click();
}

export function verifyOrderConfirmationPage() {
  cy.get('.cx-page-title').should('contain', 'Confirmation of Order');
  cy.get('h2').should('contain', 'Thank you for your order!');
  cy.get('.cx-order-review-summary .row').within(() => {
    cy.get('.col-lg-3:nth-child(1) .cx-card').within(() => {
      cy.contains(user.fullName);
      cy.contains(user.address.line1);
    });
    cy.get('.col-lg-3:nth-child(2) .cx-card').within(() => {
      cy.contains(user.fullName);
      cy.contains(user.address.line1);
    });
    cy.get('.col-lg-3:nth-child(3) .cx-card').within(() => {
      cy.contains('Standard Delivery');
    });
  });
  cy.get('cx-cart-item .cx-code').should('contain', product.code);
  cy.get('cx-order-summary .cx-summary-amount').should('contain', cart.total);
}

export function viewOrderHistory() {
  cy.selectUserMenuOption('Order History');
  cy.get('cx-order-history h3').should('contain', 'Order history');
  cy.get('.cx-order-history-table tr')
    .first()
    .find('.cx-order-history-total .cx-order-history-value')
    .should('contain', cart.total);
}
