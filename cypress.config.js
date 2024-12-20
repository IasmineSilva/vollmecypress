const { defineConfig } = require("cypress");
const dotenv = require('dotenv');
dotenv.config();
module.exports = defineConfig({
  projectId: "8qw3ta", 
<<<<<<< HEAD
  recordKey: "c5698c53-c7d0-4437-9bee-3155f695658d",
=======
  RECORD_KEY: process.env.CYPRESS_RECORD_KEY,
>>>>>>> parent of 5f63472 (.)
  retries: 2,
  e2e: {
    setupNodeEvents(on, config) {
      config.env = {
        ...config.env,
        ...process.env
      };
      return config;
      
    },
    baseUrl: 'http://localhost:3000/',
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    },
    defaultCommandTimeout: 60000,
    env: {
      "email": "clinica@gmail.com",
      "senha": "4321",
      "api_login": "http://localhost:8080/auth/login",
      "api_clinica": "http://localhost:8080/clinica",
      "api_especialista": "http://localhost:8080/especialista",
      "requestMode": true
    }
  },
  recordKey: process.env.CYPRESS_RECORD_KEY

});
