# Cypress






## Generating cypress report
- Run this in your terminal: npm install cypress-mochawesome-reporter mochawesome mochawesome-merge --save-dev
- Add this to your configuration file (cypress.config.js)
    ``` "reporter": "cypress-mochawesome-reporter",
        "reporterOptions": {
            reportDir": "cypress/reports/mochawesome", // Set the desired report output directory
            "overwrite": false,
            "html": false,
            "json": true
        } 
    ```
- Run your test
- To merge individual json report: run npx mochawesome-merge cypress/reports/.jsons/*.json > cypress/reports/mochawesome/mochawesome.json
- To generate an html report from the json report, run : npx marge cypress/reports/mochawesome.json -f report -o cypress/reports/html
- To do all these actions, run: rm -rf cypress/reports && npx cypress run && npx mochawesome-merge cypress/reports/.jsons/*.json > cypress/reports/mochawesome.json && npx marge cypress/reports/mochawesome.json -f report -o cypress/reports/html

