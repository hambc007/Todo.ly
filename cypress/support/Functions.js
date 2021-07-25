const Login = require("../PageObjects/Login")
const Signup = require("../PageObjects/Signup")

export function SignUp (email, name, pwd) {
  cy.get(Signup.Signup).click()
  cy.get(Signup.Name).type(name)
  cy.get(Signup.Email).type(email)
  cy.get(Signup.Password).type(pwd)
  cy.get(Signup.AgreeTerm).click()
  cy.get(Signup.Button).click()
}

export function LogIn (email, pwd) {
  cy.get(Login.Login).click()
  cy.get(Login.EmailInput).type(email)
  cy.get(Login.Password).type(pwd)
  cy.get(Login.LoginButton).first().click()
}

export function Random () {
  const uuid = () => Cypress._.random(0, 10000)
  const id = uuid()
  return (`${id}`)
}