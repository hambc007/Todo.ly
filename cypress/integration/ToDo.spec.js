const TodoPage = require("../PageObjects/TodoPage")
const Login = require("../PageObjects/Login")
const Signup = require("../PageObjects/Signup")
const Functions = require("../support/Functions")
const TestData = require("../support/TestData")


context('Validate Todo.ly', () => {
  beforeEach(() => {
    cy.visit('http://todo.ly/')
  })

  const validEmail = Functions.Random()+TestData.Validemail

  it('Verify creating User with invalid email', () => {
    Functions.SignUp(TestData.Invalidemail, TestData.Name, TestData.Pwd)
    cy.get(Signup.Error).should("be.visible").should('have.text',TestData.ErrorMessage)
  })    

  it('Verify creating user', () => {
    Functions.SignUp(validEmail, TestData.Name, TestData.Pwd)
    cy.get(TodoPage.Header).should("be.visible")
    cy.get(TodoPage.ProjectTitle).should("be.visible").should("have.text",TestData.DefaultPrj)
  })    

  it('Verify Login with invalid email', () => {
    Functions.LogIn(TestData.Invalidemail, TestData.Pwd)
    cy.get(Login.Error).should("be.visible").should('have.text',TestData.ErrorMessagelog)
  })

  it('Verify Login', () => {
    Functions.LogIn(validEmail, TestData.Pwd)
    cy.get(TodoPage.Header).should("be.visible")
    cy.get(TodoPage.ProjectTitle).should("be.visible").should("have.text",TestData.DefaultPrj)
  })

  it('Verify Adding a project and an item', () => {
    let Donecount = 0 //doneitem counter
    cy.log('Log in to the system and add a project')
    Functions.LogIn(validEmail, TestData.Pwd)
    cy.get(TodoPage.AddProject).first().click()
    cy.get(TodoPage.AddprjInput).type(TestData.NewPrj)
    cy.get(TodoPage.AddprjButton).click()
    cy.get(TodoPage.Newproject).last().click()
    cy.get(TodoPage.ProjectTitle).should("have.text",TestData.NewPrj)
    cy.get(TodoPage.noitems).should("have.text",TestData.Noitems)
    cy.get(TodoPage.donecount).should("have.text",Donecount)
    
    cy.log('Add an item')
    cy.get(TodoPage.AddItem).type(TestData.Newitem)
    cy.get(TodoPage.Itembutton).click()
    cy.get(TodoPage.noitems).should("not.be.visible")
    cy.get(TodoPage.ItemContent).should("have.text",TestData.Newitem)
    
    cy.log('Check created item to done')
    cy.get(TodoPage.Donebox).click()
    Donecount++
    cy.get(TodoPage.noitems).should("have.text",TestData.Noitems)
    cy.get(TodoPage.donecount).should("have.text",Donecount)
  })
})