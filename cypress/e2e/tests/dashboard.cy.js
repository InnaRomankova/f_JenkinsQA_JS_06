/// <reference types="cypress" />

import pipelinePageData from "../../fixtures/pom_fixtures/pipelinePage.json";
import HomePage from "../../pageObjects/HomePage";
import freestyleProjectPageData from "../../fixtures/pom_fixtures/freestyleProjectPage.json";
import homePageData from "../../fixtures/pom_fixtures/homePage.json";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";


describe('dashboard', () => {

    const homePage = new HomePage()

    it("AT_20.04.01 | <Dashboard> Jenkins Table: Pipeline's dropdown menu", () => {
        cy.createPipeline(pipelinePageData.pipelineName);
        homePage
            .hoverAndClickProjectDrpDwn(pipelinePageData.pipelineName)
            .verifyPipeLineDrpDwnMenu()
            .should('deep.equal', pipelinePageData.pipelineDropdownItems)
            .and('have.length', pipelinePageData.pipelineDropdownItems.length)
    })

    it('AT20.01.007.1|DashbordVerify size of project table S', () => {
        cy.createFreestyleProject(freestyleProjectPageData.freestyleProjectNewName)
        homePage
        .clickTableSizeBtnS()
        .verifyTableSize(homePageData.sRem)
    })

    it('AT20.01.007.2|DashbordVerify size of project table M',() => {
        cy.createFreestyleProject(freestyleProjectPageData.freestyleProjectNewName)
        homePage
        .clickTableSizeBtnM()
        .verifyTableSize(homePageData.mRem)
    })

    it('AT20.01.007.3|DashbordVerify size of project table L',() => {
        cy.createFreestyleProject(freestyleProjectPageData.freestyleProjectNewName)
        homePage
        .clickTableSizeBtnL()
        .verifyTableSize(homePageData.lRem)
    });
     it('AT 20.07.01 Dashboard|Icon S be visible in the first column of the title',()=>{
        cy.createFreestyleProject(freestyleProjectPageData.freestyleProjectNewName);
        cy.createPipeline(pipelinePageData.pipelineName);
        cy.createMultBranchPipeline(newItemPageData.multibranchPipelineName);
        homePage
       .getHeadersTableJobs().eq(0)
       .should('contain',homePageData.HeadersTableJobs[0]);           
     })
})

