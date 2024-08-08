export class BornTodayPage{
    
    searchByBirthday(){

        cy.get('[data-testid="birthday-input-test-id"]').type(this.formatDate('yesterday').substring(6)+'{Enter}',{force:true})
        cy.contains('See results').click({force:true})
        cy.contains('3.').click({force:true})
    }

    searchByBirthDate(){

        cy.get('[data-testid="birthDate-start"]').type(this.formatDate('today'))
        cy.get('[name="birth-year-month-end-input"]').type(this.formatDate('today').substring(0,7))
        cy.contains('See results').click({force:true})
        cy.get('[data-testid="dli-bio"] > div > div').children().then((descriptionLink) => {
            if(descriptionLink.length > 0)
                descriptionLink.first().click()
            else
                cy.log('No links found in the description')
        })
    }

    formatDate(str) {
        var d = new Date()
       
        if(str=='today') 
         {
            var day = '' +d.getDate(),
                month = '' + (d.getMonth() + 1),
                year = d.getFullYear() -40

         }
        if(str=='yesterday')
        {
            d.setDate( d.getDate()-1),
            day = '' +d.getDate(),
            month = '' + (d.getMonth() + 1),
            year = d.getFullYear() 
        }
        
        if (month.length < 2) 
            month = '0' + month
        if (day.length < 2) 
            day = '0' + day

        return [year, month, day].join('-')
    }


    takeScreen(fileName){
        cy.screenshot(fileName,{overwrite: true})
    }

}