import { LandingPage } from "./pages/landingPage"
import { CelebrityProfilePage } from "./pages/celebrityProfilePage"

const landingPage = new LandingPage
const celebrityProfilePage = new CelebrityProfilePage

describe('Brite Test Frontend in '+Cypress.browser.name+'', () => {
  
    beforeEach(function(){
      // Launch browser and navigate to IMDB website
      cy.visit('/', {
        headers: {
            'accept': 'application/json, text/plain, */*'
            }
        });

      //Save cookie preference 
      landingPage.manageCookiePreference()

      cy.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
            return false
          
        });
    })

  it('Test actors upcoming in pre-production', () => {
   
    landingPage.searchBar('Nicolas Cage')
    landingPage.searchResults()
    
    celebrityProfilePage.upcomingProjects('Pre-production')
  })
})