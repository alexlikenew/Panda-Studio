import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

// Dummy Heading Component for testing purposes
const Heading = ({ children }: { children: React.ReactNode }) => {
    return <h1>{children}</h1>;
};

describe('UI Component Test', () => {
    it('should render children text correctly', () => {
        render(<Heading>Hello World</Heading>);
        const headingElement = screen.getByText(/Hello World/i);
        expect(headingElement).toBeDefined();
    });
});
