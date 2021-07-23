const TodoPage = require("../PageObjects/TodoPage")
const Signup = require("../PageObjects/Signup")
const Functions = require("../support/Functions")
const TestData = require("../support/TestData")
const Login = require("../PageObjects/Login")


context('Validate Todo.ly', () => {
    beforeEach(() => {
      cy.visit('http://todo.ly/')
    })

it('Verify creating User with invalid email', () => {
Functions.SignUp(TestData.Invalidemail, TestData.Name, TestData.Pwd)
cy.get(Signup.Error).should("be.visible").should('have.text',TestData.ErrorMessage)
})    

it('Verify creating user', () => {
Functions.SignUp(TestData.Validemail, TestData.Name, TestData.Pwd)
cy.get(TodoPage.ProjectTitle).should("be.visible").should("have.text",TestData.DefaultPrj)
})    

it('Verify Login Negtive', () => {

Functions.LogIn(TestData.Invalidemail, TestData.Pwd)
cy.get(Login.Error).should("be.visible").should('have.text',TestData.ErrorMessagelog)
})

it('Verify Login', () => {
Functions.LogIn(TestData.Validemail, TestData.Pwd)

cy.get(TodoPage.Header).should("be.visible")
cy.get(TodoPage.ProjectTitle).should("be.visible").should("have.text",TestData.DefaultPrj)
})


it('Verify Adding a project', () => {

Functions.LogIn(TestData.Validemail, TestData.Pwd)
let Donecount = 0
cy.get(TodoPage.AddProject).first().click()
cy.get(TodoPage.AddprjInput).type(TestData.NewPrj)
cy.get(TodoPage.AddprjButton).click()
cy.get(TodoPage.Newproject).last().click()
cy.get(TodoPage.ProjectTitle).should("have.text",TestData.NewPrj)
cy.get(TodoPage.noitems).should("have.text",TestData.Noitems)
cy.get(TodoPage.donecount).should("have.text",Donecount)

cy.get(TodoPage.AddItem).type(TestData.Newitem)
cy.get(TodoPage.Itembutton).click()
cy.get(TodoPage.noitems).should("not.be.visible")
cy.get(TodoPage.ItemContent).should("have.text",TestData.Newitem)
Donecount++

cy.get(TodoPage.Donebox).click()
cy.get(TodoPage.noitems).should("have.text",TestData.Noitems)
cy.get(TodoPage.donecount).should("have.text",Donecount)

})
})