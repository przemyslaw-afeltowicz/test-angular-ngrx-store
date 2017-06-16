import { TestAngularNgrxStorePage } from './app.po';

describe('test-angular-ngrx-store App', () => {
  let page: TestAngularNgrxStorePage;

  beforeEach(() => {
    page = new TestAngularNgrxStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
