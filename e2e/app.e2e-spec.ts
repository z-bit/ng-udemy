import { NgUdemyPage } from './app.po';

describe('ng-udemy App', function() {
  let page: NgUdemyPage;

  beforeEach(() => {
    page = new NgUdemyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
