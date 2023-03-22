import { login } from "../../page_object/loginPage"
import { welcome } from "../../page_object/welcomePage"

describe('Test To login Single Node Rancher UI and check its successfull', ()=>{
    beforeEach('Open Application', () =>{
        cy.visit('https://localhost/dashboard')
    })
    it('Rancher UI login test.', ()=>{
        login.rancherLogin()
        welcome.validateWelcomeBanner()
        welcome.validateMainPage()
    })
})

