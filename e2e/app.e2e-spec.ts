import { UserfrontPage } from './app.po';

describe('userfront App', function() {
  let page: UserfrontPage;

  beforeEach(() => {
    page = new UserfrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
