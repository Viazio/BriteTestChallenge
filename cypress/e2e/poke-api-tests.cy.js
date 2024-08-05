describe('Brite Test Backend', () => {

    const berrySuccessSchema = require('./schemas/getBerrySuccessResponseSchema.json')
    const berryFlavorSuccessSchema = require('./schemas/getBerryFlavorSuccessResponseSchema.json')

    it('Test berry by id ', () => { 

            cy.log('Get berry by id success scenario')
            cy.getBerry('1').then((response) => {
                cy.log(JSON.stringify(response.body))
                expect(response.status).to.be.eq(200)
                expect((response.body)).to.be.jsonSchema(berrySuccessSchema)
              })

            cy.log('Get berry by id failure scenario')
            cy.getBerry('1q').then((response) => {
                cy.log(JSON.stringify(response.body))
                expect(response.status).to.be.eq(404)
                expect((response.body)).to.be.eq('Not Found')
            })
        })
  
        it('Test berry by name ', () => {

            cy.log('Get berry by name success scenario')
            cy.getBerry('sitrus').then((response) => {
                cy.log(JSON.stringify(response.body))
                expect(response.status).to.be.eq(200)
                expect((response.body)).to.be.jsonSchema(berrySuccessSchema)
              })

            cy.log('Get berry by name failure scenario')
            cy.getBerry('Brite').then((response) => {
                cy.log(JSON.stringify(response.body))
                expect(response.status).to.be.eq(404)
                expect((response.body)).to.be.eq('Not Found')
            })
        })

        it('Test berry-flavor by name ', () => {

            cy.log('Get list of all berries with sweet flavor')
            cy.getBerryByFlavor('sweet').then((response) => {
                cy.log(JSON.stringify(response.body))
                expect(response.status).to.be.eq(200)
                expect((response.body)).to.be.jsonSchema(berryFlavorSuccessSchema)
              })
        
        })

        it('Find berry with high potency in spicy flavor', () =>{

            cy.log('Get list of all berries with spicy flavor')

            var potencyVal = 0
            var berryName = 'a'

            cy.getBerryByFlavor('spicy').then((response) => {
                
                var resBody = response.body
                //cy.log(resBody.berries.length)
                for(var i = 0; i < resBody.berries.length; i++)
                    {
                        if(resBody.berries[i].potency > potencyVal)
                        {
                            potencyVal = resBody.berries[i].potency
                            berryName = resBody.berries[i].berry.name
                        }
                        //cy.log(resBody.berries[i].berry.name, berryName , resBody.berries[i].potency , potencyVal)
                    }     
                    
                cy.log(berryName+' has the highest potency value of '+potencyVal+' in spicy flavour')
               
                cy.getBerry(berryName).then((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.be.eq(200)
                    expect((response.body)).to.be.jsonSchema(berrySuccessSchema)
                  })
            })
            
        })

  
})
   
  