describe('Footer Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4321');
    });

    it('should display the correct title', () => {
      cy.title().should('equal', 'DinoShort');
    });

    it('should display the correct version and year', () => {
      const currentYear = new Date().getFullYear();

      cy.get('footer .footer-icon')
        .should('have.attr', 'src', '/images/jam.webp')
        .and('have.attr', 'alt', 'JAM Icon');

      cy.get('footer a[href="https://github.com/JAM-Productions"]')
        .should('exist')
        .and('contain.text', 'JAM-Productions');

      cy.get('footer .footer-version').contains(`© ${currentYear}`);

      cy.readFile('package.json').then((packageJson) => {
        cy.get('footer .footer-version').contains(`v${packageJson.version}`);
      });
    });

    it('should have the correct GitHub SVG icon', () => {
      cy.get('footer a[href="https://github.com/JAM-Productions/dinoshort"] svg')
        .should('have.attr', 'viewBox', '0 0 256 250')
        .and('have.attr', 'xmlns', 'http://www.w3.org/2000/svg');
    });
  });
