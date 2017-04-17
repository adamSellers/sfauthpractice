import { SalesforcePage } from './app.po';

describe('salesforce App', () => {
  let page: SalesforcePage;

  beforeEach(() => {
    page = new SalesforcePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
