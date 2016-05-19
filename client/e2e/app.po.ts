export class TheLeaguePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('the-league-app h1')).getText();
  }
}
