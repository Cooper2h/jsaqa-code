
const { clickElement, putText, getText } = require("./lib/commands.js");
// const { generateName } = require("./lib/util.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto("http://qamid.tmweb.ru/client/index.php");
});

afterEach(() => {
  page.close();
});

describe("Tests for GoToTheCinema", () => {

  test("Should reserve ticket", async () => {
    await clickElement(page, "a:nth-child(2)");
    await clickElement(page, ".movie-seances__time[href='#'][data-seance-id='217']");
    await clickElement(page, "div:nth-child(2) span:nth-child(1)");
    await clickElement(page, "button.acceptin-button");
    expect(await getText(page, "h2.ticket__check-title")).toContain(
      "Вы выбрали билеты:"
    );
  });

  test("Should reserve ticket and get a code", async () => {
    await clickElement(page, "a:nth-child(3)");
    await clickElement(page, ".movie-seances__time[href='#'][data-seance-id='217']");
    await clickElement(page, "div:nth-child(1) span:nth-child(2)");
    await clickElement(page, "button.acceptin-button");
    expect(await getText(page, "h2.ticket__check-title")).toContain(
      "Вы выбрали билеты:"
    );

    await clickElement(page, "button.acceptin-button");
    expect(await getText(page, "h2.ticket__check-title")).toContain(
      "Электронный билет"
    );
  });

  test("Should not be available button", async () => {
    await clickElement(page, "a:nth-child(3)");
    await clickElement(page, ".movie-seances__time[href='#'][data-seance-id='217']");
    await clickElement(page, ".buying-scheme__chair.buying-scheme__chair_standart.buying-scheme__chair_taken");
    expect(
      String(
        await page.$eval("button", (button) => {
          return button.disabled;
        })
      )
    ).toContain("true");
  });
});
