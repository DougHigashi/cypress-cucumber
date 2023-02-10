/// <reference types="cypress" />

describe("Após acessar o site demoblaze", () => {

  const user_num = Math.floor(Math.random() * 1000000);
  const user = `ME_user_${user_num}`;
  const password = "me_password";

  beforeEach(() => {
    cy.visit("https://www.demoblaze.com/");
  });

  it("Dado que criamos um usuário", () => {
    cy.get("#signin2").click();

    cy.wait(500);
    cy.get("#sign-username").type(user);
    cy.get("#sign-password").type(password);

    cy.get('button[onclick="register()"]').click();

    cy.on("window:confirm", (text) => {
      expect(text).to.equal("Sign up successful.");
    });

    cy.wait(1000);
  });

  it("Quando realizar login com esse usuário", () => {
    cy.get("#login2").click();

    cy.wait(500);
    cy.get("#loginusername").type(user);
    cy.get("#loginpassword").type(password);

    cy.get('button[onclick="logIn()"]').click();
  });

  it("Então devo ver usuário no topo da página", () => {
    cy.get("#login2").click();

    cy.wait(500);
    cy.get("#loginusername").type(user);
    cy.get("#loginpassword").type(password);

    cy.get('button[onclick="logIn()"]').click();

    cy.wait(1000);
    cy.get("#nameofuser").should("have.text", `Welcome ${user}`);
  });
});
