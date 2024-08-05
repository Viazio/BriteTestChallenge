const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:720,
 viewportWidth:1280,
 chromeWebSecurity: true,

  e2e: {
    baseUrl: 'https://www.imdb.com/',
    chromeWebSecurity: true,
    watchForFileChanges:true,
    pageLoadTimeout : 72000,
    reporter:'mochawesome',
    reporterOptions:{
        charts : true,
        overwrite : false,
        html : false,
        json : true,
        reportDir :'cypress/report/mochawesome-report'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});
