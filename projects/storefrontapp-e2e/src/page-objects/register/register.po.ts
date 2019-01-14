import { browser, by, element, ElementFinder } from 'protractor';
import { RegisterForm } from './register-form.po';
import { AppPage } from '../app.po';
import { E2EUtil } from '../../e2e-util';

export class RegisterPage extends AppPage {
  readonly page: ElementFinder = element(by.tagName('cx-register-page'));
  readonly registerForm: RegisterForm = new RegisterForm(this.page);

  async navigateTo() {
    await browser.get('/register');
    await this.waitForReady();
  }

  async waitForReady() {
    console.log('before await SUPER (RegisterPage) wait for ready');
    await super.waitForReady();
    console.log('after await SUPER (RegisterPage) wait for ready');
    console.log('');

    console.log('before await register form visible');
    await E2EUtil.wait4VisibleElement(this.registerForm.form);
    console.log('after await register form visible');
    console.log('');
  }
}
