import { A2tstPage } from './app.po';

describe('a2tst App', function() {
  let page: A2tstPage;

  beforeEach(() => {
    page = new A2tstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
