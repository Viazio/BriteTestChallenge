export class MoviePage{

    imdbRating(){
        cy.get('[aria-label="View User Ratings"] > span').first().click({force: true})
    }

    userRatingOption(){
        cy.get('[data-testid="rating-button__user-rating__unrated"]').click({force: true})
    }

    rateMovie(){
        cy.get('div.ipc-starbar__rating').children().eq(4).click({force: true})
        cy.get('.ipc-rating-prompt__rating-container > .ipc-btn').click({force: true})
    }

    openPhotos(){
        cy.get('[data-testid="hero__photo-link"]').click({force: true})
        
    }

    openGallery(){
        cy.get('[data-testid="mv-gallery-button"]').click({force: true})
        
    }

    openGalleryFilter(){
        cy.get('[data-testid="image-chip-dropdown-test-id"]').click({force: true})
        
    }

    openMorePeople(){
        cy.get('[data-testid="image-names-filter-container-test-id"] > .ipc-select > .ipc-select__container').click({force: true})
        cy.get('#Person-filter-select-dropdown').select('nm0001803')
    }

    selectPhoto(){
        cy.get('[data-testid="promptable__x"]').click({force: true})
        cy.get('[data-testid="rm123229952-img-1"] > [data-testid="image-gallery-image"]').click({force: true})
    }
}