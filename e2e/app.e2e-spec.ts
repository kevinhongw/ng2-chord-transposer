import { Ng2ChordTransposerPage } from './app.po';

describe('ng2-chord-transposer App', () => {
  let page: Ng2ChordTransposerPage;

  beforeEach(() => {
    page = new Ng2ChordTransposerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
