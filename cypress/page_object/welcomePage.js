

export class WelcomePage{
    validateWelcomeBanner(){
        cy.get('h1[class="title"]').should('have.text', 'Welcome to Rancher')
    }
    validateMainPage(){
        cy.url().should('eq', 'https://localhost/dashboard/home')
    }
}

export const welcome = new WelcomePage()