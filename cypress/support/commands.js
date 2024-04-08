// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

Cypress.Commands.add('typeSecurely', { prevSubject: 'element' }, (subject, text) => {
    const logMaskedText = '*'.repeat(text.length);
    Cypress.log({
        $el: subject,
        name: 'sensitiveInfo',
        message: logMaskedText,
    })
    cy.wrap(subject, {log:false}).type(text, {log:false})
})
  
  
// Cypress.Commands.add("logFailedTest", (id, patientId) => {
//     Cypress.log({
//         name: "Failed Test",
//         displayName: "FAILED TEST",
//         message: [`ID: ${id}`, `Patient ID: ${patientId}`],
//         consoleProps: () => {
//             return {
//                 "ID": id,
//                 "Patient ID": patientId
//             };
//         }
//     });
// });