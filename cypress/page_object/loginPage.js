



export class LoginPage{
    rancherLogin(){
        cy.get('#username').type('admin')
        cy.get('input[type="password"]').type('suseranchertest')
        cy.get('#submit').click()
    }
}

export const login = new LoginPage()