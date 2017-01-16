import { Cr460Lab1UiPage } from './app.po';

describe('cr460-lab1-ui App', function() {
  let page: Cr460Lab1UiPage;

  beforeEach(() => {
    page = new Cr460Lab1UiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
