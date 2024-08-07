import { LandingPage } from "./pages/landingPage"
import { CelebrityProfilePage } from "./pages/celebrityProfilePage"
import { MoviePage } from "./pages/moviePage"
import { BornTodayPage } from "./pages/bornTodayPage"

const landingPage = new LandingPage
const celebrityProfilePage = new CelebrityProfilePage
const moviePage = new MoviePage
const bornTodayPage = new BornTodayPage

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

  it('Test top box office', () => {
    landingPage.menuBar('Top Box Office')
    landingPage.clickByContains('2.')

    moviePage.imdbRating()
    moviePage.userRatingOption()

    moviePage.rateMovie()
    })



 it('Test top 250 TV Shows', () => {
   
    landingPage.menuBar('Top 250 TV Shows')
    landingPage.clickByContains('Breaking Bad')

    moviePage.openPhotos()
    moviePage.openGallery()
    moviePage.openGalleryFilter()
    moviePage.openMorePeople()
    moviePage.selectPhoto()
 
  })

    it('Test born today section', () => {

    landingPage.menuBar('Born Today')
    landingPage.clickByContains('Birthday:')
    landingPage.clickByContains('Birthday')

    bornTodayPage.searchByBirthday()
    bornTodayPage.takeScreen('Third profile born yesterday')
   
  })


  it('Test born 40 years ago today ', () => {

    
    landingPage.menuBar('Born Today')
    landingPage.clickByContains('Birthday:')
    landingPage.clickByContains('Birth date')
   
    bornTodayPage.searchByBirthDate()
    bornTodayPage.takeScreen('First link in description')
   
  })



 
})