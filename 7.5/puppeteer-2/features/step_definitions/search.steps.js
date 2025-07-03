const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement, getText } = require("../../lib/commands.js");
const {setDefaultTimeout} = require("cucumber");

setDefaultTimeout(5 * 1000);

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on page {string}", async function (string) {
  return await this.page.goto(`${string}`, {
  });
});

When("user choose date", async function () {
  return await clickElement(this.page, "a:nth-child(4)");
});

When("user choose movie time", async function () {
  return await clickElement(this.page, ".movie-seances__time[href='#'][data-seance-id='217']");
});

When("user choose a seat", async function () {
  return await clickElement(this.page, ".buying-scheme__row > span:nth-child(5)");
});

When("user click on the reserve button", async function () {
  return await clickElement(this.page, "button.acceptin-button");
});

When("user choose another seat", async function () {
  return await clickElement(this.page, "div:nth-child(2) span:nth-child(4)");
});

When("user choose one more seat", async function () {
  return await clickElement(this.page, "div:nth-child(3) span:nth-child(5)");
});

When("user click on the get code button", async function () {
  return await clickElement(this.page, "button.acceptin-button");
});

When("user choose already selected seat", async function () {
  return await clickElement(this.page, ".buying-scheme__chair_taken");
});

// Then("user sees the payment page and text {string}", async function (string) {
//   const actual = await getText(this.page, "h2.ticket__check-title");
//   const expected = await string;
//   expect(actual).contains(expected);
// });

Then("user get the code and text {string}", async function (string) {
  const actual = await getText(this.page, "h2.ticket__check-title");
  const expected = await string;
  expect(actual).contains(expected);
});

Then("button for reserving is inactive {string}", async function (string) {
  const actual = String(
    await this.page.$eval("button", (button) => {
      return button.disabled;
    })
  );
  const expected = "true";
  expect(actual).contains(expected);
});