import { TodoProjectPage } from './app.po';

describe('todo-project App', () => {
  let page: TodoProjectPage;

  beforeEach(() => {
    page = new TodoProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
