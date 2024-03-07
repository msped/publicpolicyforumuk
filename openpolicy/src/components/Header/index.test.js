import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import mediaQuery from 'css-mediaquery';
import Header from './index';

const createMatchMedia = (width) => (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {}
});

describe('Header', () => {
    it('renders without crashing', () => {
        render(<Header />);
    });

    // Desktop tests
    it('toggles mobile menu on MenuIcon click', () => {
        window.matchMedia = createMatchMedia(1200)
        render(<Header />);
        const menuContents = [
            "Collaborate",
            "Review",
            "Integrate",
            "Support"
        ]

        menuContents.forEach((item) => {
            expect(screen.queryByText(item)).toBeInTheDocument();
        })
    });

    // TO DO
    // it('shows login and register buttons when not logged in', () => {
    //     const { getByText } = render(<Header />); // Assuming default session state is logged out
    //     expect(getByText('Login')).toBeInTheDocument();
    //     expect(getByText('Register')).toBeInTheDocument();
    // });

    // Mobile Tests
    it('toggles mobile menu on MenuIcon click', () => {
        window.matchMedia = createMatchMedia(600)

        render(<Header />);
        const menuButton = screen.getByTestId('MenuIcon');
        fireEvent.click(menuButton);
        expect(screen.queryByText('Collaborate')).toBeInTheDocument();
    });

    it('closes mobile menu when clicking away', async () => {
        window.matchMedia = createMatchMedia(600)
        render(<Header />);
        const menuButton = screen.getByTestId('MenuIcon');

        fireEvent.click(menuButton);

        const menu = screen.queryByLabelText('menu');
        
        fireEvent.click(menuButton);

        fireEvent.click(document.body); 
        await waitFor(() => {
            expect(menu).not.toBeVisible();
        });
    });

    // TODO: add when auth is implemented
    // it('closes mobile account settings when clicking away', async () => {
    //     const { getByRole, queryByText } = render(<Header />);
    //     const menuButton = getByRole('button', { name: /account-settings/i });
    //     fireEvent.click(menuButton);

    //     fireEvent.click(document.body);
    //     await waitFor(() => {
    //         expect(queryByText('Collaborate')).not.toBeInTheDocument();
    //     });
    // });

    // TO DO
    // it('shows login and register buttons when not logged in', () => {
    //     const { getByText } = render(<Header />); // Assuming default session state is logged out
    //     expect(getByText('Login')).toBeInTheDocument();
    //     expect(getByText('Register')).toBeInTheDocument();
    // });

    // TODO: mock usesession to add account setting tests
});
