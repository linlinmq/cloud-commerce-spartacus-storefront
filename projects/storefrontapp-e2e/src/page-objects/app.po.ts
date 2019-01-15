import { Header } from './cmslib/header.po';
import { browser } from 'protractor';
import { Footer } from './cmslib/footer.po';
import { E2EUtil } from '../e2e-util';

export abstract class AppPage {
  readonly header: Header = new Header();
  readonly footer: Footer = new Footer();

  async getBrowserPageTitle(): Promise<string> {
    return browser.getTitle();
  }

  async waitForReady() {
    // Sometimes the category navigation is loaded and rendered after the content of the page is rendered.
    // This changes the layout of the page so we should wait until the category navigation is loaded to avoid
    // random failures of e2e tests.
    //
    // spike todo uncomment:
    console.log('before await category navigation link present');
    await E2EUtil.wait4PresentElement(this.header.categoryNavigationLink);
    console.log('after await category navigation link present');
    console.log('');
  }
}
