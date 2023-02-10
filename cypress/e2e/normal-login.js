import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const user_num = Math.floor(Math.random() * 1000000)
const user = `ME_user_${user_num}`;
const password = "me_password";


Given("que criamos um usuário", () => {
  cy.visit('https://Demoblaze.com')
  cy.get("#signin2").click();

  cy.wait(500);
  cy.get("#sign-username").type(user);
  cy.get("#sign-password").type(password);

  cy.get('button[onclick="register()"]').click();

  cy.on("window:confirm", (text) => {
    expect(text).to.equal("Sign up successful.");
  });
});

When("realizar login com esse usuário", () => {
  cy.get("#login2").click();

  cy.wait(500);
  cy.get("#loginusername").type(user);
  cy.get("#loginpassword").type(password);

  cy.get('button[onclick="logIn()"]').click();

});

Then("devo ver usuário no topo da página", () => {
  cy.wait(1000);
  cy.get("#nameofuser").should("have.text", `Welcome ${user}`);
})
