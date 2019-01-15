import {
  ElementFinder,
  browser,
  protractor,
  ExpectedConditions,
  promise,
  element,
  by
} from 'protractor';

export class E2EUtil {
  /**
   * Fills a given input with the desired value
   * @param input the input element
   * @param value the value to fill
   * @param skipEnter if true, will fill the form but won't press enter (optional param)
   */
  static async fillInput(
    input: ElementFinder,
    value: string,
    skipEnter?: boolean
  ) {
    await input.sendKeys(value);

    if (!skipEnter) {
      await browser
        .actions()
        .sendKeys(protractor.Key.ENTER)
        .perform();
    }
  }

  /**
   * Wait until a given text is visible in the element
   * @param elem The element
   */
  static wait4TextInElement(elem: ElementFinder, text: string): any {
    return browser.wait(
      ExpectedConditions.textToBePresentInElement(elem, text)
    );
  }

  static spike_waitForAngularEnabled(bool) {
    if (bool) {
      browser.waitForAngularEnabled(true);
      browser
        .manage()
        .timeouts()
        .implicitlyWait(0);
    } else {
      browser.waitForAngularEnabled(false);
      browser
        .manage()
        .timeouts()
        .implicitlyWait(10000);
    }
  }

  /**
   * Wait until a given element is visible on the browser
   * @param elem The element
   */
  static wait4VisibleElement(elem: ElementFinder): promise.Promise<any> {
    // spike new:
    return this.retryVisible(elem);
  }

  // spike todo remove
  static async retryVisible(elem: ElementFinder) {
    this.spike_waitForAngularEnabled(false);

    try {
      console.log('=> try visibility!');
      await browser.wait(ExpectedConditions.visibilityOf(elem));
    } catch (_) {
      console.log('=> RETRY sleep!');
      await browser.sleep(1000);

      console.log('=> before RETRY visibility!');
      await browser.wait(ExpectedConditions.visibilityOf(elem));
      console.log('=> after RETRY visibility!');
    } finally {
      // this.spike_waitForAngularEnabled(true);
    }
  }

  /**
   * Wait until a given element is present on the browser
   * @param elem The element
   */
  static wait4PresentElement(elem: ElementFinder): promise.Promise<any> {
    return this.retryPresence(elem);
  }

  static async safeClick(elem: ElementFinder): promise.Promise<any> {
    // console.log('SAFE CLICK: before await for visible!');
    // await this.wait4VisibleElement(elem);
    // console.log('SAFE CLICK: after await for visible!');

    this.spike_waitForAngularEnabled(false);

    console.log('SAFE CLICK: before await click!');
    await elem.click();
    console.log('SAFE CLICK: after await click!');

    // this.spike_waitForAngularEnabled(true);
  }

  // spike todo remove
  static async retryPresence(elem: ElementFinder) {
    this.spike_waitForAngularEnabled(false);

    try {
      console.log('=> try presence!');
      await browser.wait(ExpectedConditions.presenceOf(elem));
    } catch (_) {
      console.log('=> RETRY sleep!');
      await browser.sleep(1000);
      console.log('=> before RETRY presence!');
      await browser.wait(ExpectedConditions.presenceOf(elem));
      console.log('=> after RETRY presence!');
    } finally {
      // this.spike_waitForAngularEnabled(true);
    }
  }

  /**
   * Wait until a given element is NOT visible on the browser
   * @param elem The element
   */
  static wait4NotVisibleElement(elem: ElementFinder): promise.Promise<{}> {
    return browser.wait(
      ExpectedConditions.not(ExpectedConditions.visibilityOf(elem))
    );
  }

  /**
   * Finds price in text by looking for $ sign
   * @param textWithPrice
   */
  static findPrice(textWithPrice: string) {
    return textWithPrice.slice(textWithPrice.indexOf('$'));
  }

  /**
   * Select option from <select> element by text
   * @param selectElement
   * @param text
   */
  static selectOptionByText(selectElement: ElementFinder, text: string) {
    return selectElement
      .all(by.cssContainingText('option', text))
      .get(0)
      .click();
  }

  /**
   * Select option from <ng-select> element by text
   * @param selectElement
   * @param text
   */
  static async selectNgSelectOptionByText(
    selectElement: ElementFinder,
    text: string
  ) {
    selectElement.element(by.css('.ng-select-container')).click();
    await this.wait4VisibleElement(element(by.css('.ng-dropdown-panel-items')));

    return selectElement
      .all(by.cssContainingText('.ng-option', text))
      .first()
      .click();
  }

  /**
   * Select option from <select> element by option number
   * @param selectElement
   * @param optionNo
   */
  static selectOptionByNo(selectElement: ElementFinder, optionNo: number) {
    return selectElement
      .all(by.tagName('option'))
      .get(optionNo)
      .click();
  }

  static async scrollToElement(elementSelector: string) {
    await browser.executeScript(
      `document.querySelector("${elementSelector}").scrollIntoView()`
    );
  }
}
