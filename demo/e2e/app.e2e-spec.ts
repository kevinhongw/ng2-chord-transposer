import { TestNpmPage } from './app.po';

describe('test-npm App', () => {
  let page: TestNpmPage;

  beforeEach(() => {
    page = new TestNpmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
