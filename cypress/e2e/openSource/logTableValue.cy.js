/// <reference types="cypress" />

import {
    decideServerName,
    decideServerURL,
} from "./helpers"

describe('Iterate over each cell in Table', () => {

    const serverURL = decideServerURL(decideServerName())
    
    before(() => {
        cy.intercept(`https://${serverURL}.healthtech.net/login`).as('loginPage') // Using Alias
        cy.visit(`https://${serverURL}.healthtech.net/login`)
        cy.wait('@loginPage') // Implicit Waiting
        // Correct username Correct password
        cy.fixture('credentials').then((loginCredentials) =>
        { 
            // Do Login using loginCredentials from fixture file
            cy.get('input[name="username"]').typeSecurely(loginCredentials.correctName)     
            cy.get('input[name="password"]').typeSecurely(loginCredentials.correctPassword)  
        })
        // Navigate to Table Page
    })

    it('Iterate over eachCell of eachRow in table with Index', () => {
        cy.get('#patient_root_patientgrid tbody tr').each(($row, rowIndex) => {
            cy.wrap($row).find('td').each(($cell, cellIndex) => {
                // Log the text of each cell with row & cell index along with cell content
                cy.log(`Row ${rowIndex + 1}, Cell ${cellIndex + 1}: ${$cell.text()}`)
            })
        })
    })

    it('Iterate through specific cell of each row in a table without Index', () => {
        cy.get('#patient_root_patientgrid tbody tr').each((row) => {
            cy.wrap(row).find('td:eq(5)').then((cell) => {
                    // Log the text of specificCell of eachRow
                    cy.log(`Row , Cell : ${cell.text()}`)
            })              
        })
    })

    it('Iterate through each cell of a specific row in a table without Index when a certain condition is met', () => {
        cy.get('#patient_root_patientgrid tbody tr').each((row) => {
            cy.wrap(row).find('td:first').then((cell) => {
                // Log the text of each cell
                cy.log(`planName : ${cell.text()}`)
                if (cell.text() === 'LN_hXhY') {
                    cy.wrap(row).find('td').each((cell) => {
                        // Log the text of eachCell of specificRow selected based on Condition
                        cy.log(`Row , Cell : ${cell.text()}`)
                    })
                }
            })                
        })
    })

    after(() => {
        // Do logout or anyother task according to your needs
    }) // End after Hook

}) // End Describe Block




