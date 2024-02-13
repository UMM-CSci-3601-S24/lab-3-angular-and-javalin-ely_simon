import { TodoListPage } from "cypress/support/todo-list.po";

const page = new TodoListPage();

describe('Todo list', () => {

  beforeEach(() => {
    page.navigateTo();
  });

  it('Should have the correct page title', () => {
    page.getPageTitle().should('eq', 'Todos');
  });

  it('Should have the correct title', () => {
    page.getTodoTitle().should('have.text', 'Todos');
  });

  it('Should type something in the owner filter and check that it returned correct elements', () => {

    cy.get('[data-test=todoOwnerInput]').type('Fry');

    page.getTodoListItems().each($todo => {
      cy.wrap($todo).find('.todo-list-owner').should('contain', 'Fry');
    });

    // (We check this two ways to show multiple ways to check this)
    page.getTodoListItems().find('.todo-list-owner').each($owner =>
      expect($owner.text()).to.equal('Fry')
    );
  });

});
