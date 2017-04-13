import { MovieDBngSPAPage } from './app.po';

describe('movie-dbng-spa App', () => {
  let page: MovieDBngSPAPage;

  beforeEach(() => {
    page = new MovieDBngSPAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
