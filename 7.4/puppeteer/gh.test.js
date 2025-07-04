let page;

beforeAll(async () => {
  page = await browser.newPage();
});

afterAll(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  }, 15000);

  test("The h1 header content", async () => {
    const firstLink = await page.$(".h1-mktg.col-md-10.mx-auto.mb-3");
    await firstLink.click();
    await page.waitForSelector("h1");
    await page.waitForTimeout(2000);
    const title2 = await page.title();
    expect(title2).toEqual("GitHub for teams · Build like the best teams on the planet · GitHub");
  }, 15000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a[href='#start-of-content']", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 10000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, { visible: true });
    const actual = await page.$eval(btnSelector, (link) => link.textContent.trim());
    expect(actual).toContain("Get started with Team");
  }, 10000);
});

describe("Second task - add 3 new tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.blog");
  }, 10000);

  test("Blog", async () => {
    const title = await page.title();
    expect(title).toContain("The GitHub Blog");
  }, 10000);

  test("GitHub Security", async () => {
    await page.goto("https://github.com/features/security");
    const title = await page.title();
    expect(title).toContain("GitHub Advanced Security");
  }, 10000);

  test("Check Pricing page", async () => {
    await page.goto("https://github.com/pricing");
    const title = await page.title();
    expect(title).toContain("Pricing");
  }, 10000);
});