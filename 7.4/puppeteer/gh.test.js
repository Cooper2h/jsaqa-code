let page;

beforeEach(async () => {
  page = await browser.newPage();
<<<<<<< HEAD
=======
  await page.goto("https://github.com/team");
>>>>>>> 5ffc81ea81a3f2be40a85e5a8a831cb70254acfd
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
<<<<<<< HEAD
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$(".h1-mktg.col-md-10.mx-auto.mb-3");
    await firstLink.click();
    await page.waitForSelector("h1", { timeout: 15000 });
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

  test("The h1 header content' (duplicate)", async () => {
    const firstLink = await page.$(".h1-mktg.col-md-10.mx-auto.mb-3");
    await firstLink.click();
    await page.waitForSelector("h1", { timeout: 15000 });
    await page.waitForTimeout(2000);
    const title2 = await page.title();
    expect(title2).toEqual("GitHub for teams · Build like the best teams on the planet · GitHub");
  }, 15000);

  test("The first link attribute (duplicate)", async () => {
    const actual = await page.$eval("a[href='#start-of-content']", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 10000);

  test("The page contains Sign in button (duplicate)", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, { visible: true });
    const actual = await page.$eval(btnSelector, (link) => link.textContent.trim());
    expect(actual).toContain("Get started with Team");
  }, 10000);
});

describe("Second task - add 3 new tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(() => {
    page.close();
  });

  test("Blog", async () => {
    await page.goto("https://github.blog");
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
=======
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Where the world builds software · GitHub');
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free")
  });
});
>>>>>>> 5ffc81ea81a3f2be40a85e5a8a831cb70254acfd
