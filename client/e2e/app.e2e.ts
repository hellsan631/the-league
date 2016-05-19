import { TheLeaguePage } from './app.po';

describe('the-league App', function() {
  let page: TheLeaguePage;

  beforeEach(() => {
    page = new TheLeaguePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('the-league works!');
  });
});
