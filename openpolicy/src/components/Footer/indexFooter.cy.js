/// <reference types="cypress" />

import Footer from './index';
import React from 'react';

describe('Footer Component', () => {
    beforeEach(() => {
        cy.mount(<Footer />);
    });

    it('renders without crashing', () => {
        cy.contains('OPENPOLICY').should('be.visible');
    });

    it('renders all menu contents', () => {
        const menuContents = [
            "Design",
            "Collaborate",
            "Integrate",
            "Pricing",
            "Support"
        ];

        menuContents.forEach(content => {
            cy.contains(content).should('be.visible');
        });
    });

    it('social icons have correct aria-labels', () => {
        cy.get('[aria-label="Twitter"]').should('exist');
        cy.get('[aria-label="Facebook"]').should('exist');
        cy.get('[aria-label="Instagram"]').should('exist');
    });
});
