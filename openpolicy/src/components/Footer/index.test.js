import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './index';

jest.mock('next/router', () => require('next-router-mock'))

describe('Footer Component', () => {

    test('renders without crashing', () => {
        render(<Footer />,);
        const footerElement = screen.getByText('OPENPOLICY');
        expect(footerElement).toBeInTheDocument();
    });

    test('renders all menu contents', () => {
        render(<Footer />);
        const menuContents = [
            "Design",
            "Collaborate",
            "Integrate",
            "Pricing",
            "Support"
        ];
        
        menuContents.forEach(content => {
            expect(screen.getByText(content)).toBeInTheDocument();
        });
    });

    test('social icons have correct aria-labels', () => {
        render(<Footer />);
        
        const twitterIcon = screen.getByLabelText('Twitter');
        const facebookIcon = screen.getByLabelText('Facebook');
        const instagramIcon = screen.getByLabelText('Instagram');

        expect(twitterIcon).toBeInTheDocument();
        expect(facebookIcon).toBeInTheDocument();
        expect(instagramIcon).toBeInTheDocument();
    });
});
