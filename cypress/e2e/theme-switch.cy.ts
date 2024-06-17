describe('ThemeSwitch Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4321');
    });

    it('should display the theme switch', () => {
      cy.get('.switch').should('exist');
      cy.get('.switch input').should('have.attr', 'type', 'checkbox');
    });

    it('should toggle dark mode when the switch is clicked', () => {
      cy.get('html').should('not.have.class', 'dark');
      cy.get('.switch input').check({ force: true }).should(() => {
        expect(localStorage.getItem('darkMode')).to.eq('true');
      });
      cy.get('html').should('have.class', 'dark');

      cy.get('.switch input').uncheck({ force: true }).should(() => {
        expect(localStorage.getItem('darkMode')).to.eq('false');
      });
      cy.get('html').should('not.have.class', 'dark');
    });

    it('should retain the theme preference after page reload', () => {
      cy.get('.switch input').check({ force: true });
      cy.reload();
      cy.get('html').should('have.class', 'dark');
      cy.get('.switch input').should('be.checked');

      cy.get('.switch input').uncheck({ force: true });
      cy.reload();
      cy.get('html').should('not.have.class', 'dark');
      cy.get('.switch input').should('not.be.checked');
    });
  });
