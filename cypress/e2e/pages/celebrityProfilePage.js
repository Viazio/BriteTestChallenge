export class CelebrityProfilePage{

    upcomingProjects(projectStatus){
        cy.get('[data-testid="accordion-item-actor-upcoming-projects"] > .ipc-accordion__item__title').click({force:true})  
        cy.contains('div', projectStatus).first().click({force:true})
    }
}