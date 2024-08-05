export class LandingPage{

    manageCookiePreference(){
        cy.get('[data-testid="reject-button"]',{timeout: 10000}).should('be.visible').click({force:true})
    }

    searchBar(searchText){
        cy.get('#suggestion-search').type(searchText+'{Enter}')
    }

    searchResults(){
        cy.get('[data-testid="find-results-section-name"] > .sc-e8e4ce7-2 > .ipc-metadata-list > :nth-child(1)').click({force:true})
    }

    menuBar(menuSelect){
        cy.get('#imdbHeader-navDrawerOpen').click()
        cy.contains(menuSelect).click()
    }

    clickByContains(searchText){
        cy.contains(searchText).click({force:true})
    }

   
}
